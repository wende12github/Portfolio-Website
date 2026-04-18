"use client";

import { PROJECTS } from "@/lib/data/projects";
import { PROJECTS_COPY } from "@/lib/data/home-copy";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import { useState } from "react";
import Image from "next/image";


export function ProjectsSection() {
    const { isDark } = useIsDark();
    
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredProject, setHoveredProject] = useState('');

    const allProjectsPreview = PROJECTS.slice(0, 6);

    const filteredProjects = activeCategory === 'all'
        ? allProjectsPreview
        : PROJECTS.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" 
            className={`py-24 sm:py-20 relative overflow-hidden ${
                isDark ? 'section-soft-gradient' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
                        {PROJECTS_COPY.eyebrow}
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        {PROJECTS_COPY.headingPrefix}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300">
                            {PROJECTS_COPY.headingHighlight}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 mx-auto rounded-full" />
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {PROJECTS_COPY.categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${
                                activeCategory === category.id
                                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                                    : isDark 
                                        ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                                        : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const primaryCtaUrl = project.liveUrl ?? project.githubUrl;
                            const primaryCtaLabel = project.liveUrl
                                ? PROJECTS_COPY.cta.viewProject
                                : PROJECTS_COPY.cta.viewCode;

                            return (
                            <motion.article 
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject('')}
                                className={`group relative rounded-3xl overflow-hidden ${
                                    isDark ? 'bg-gray-800' : 'bg-gray-50'
                                }`}
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold">
                                        <Sparkles className="w-3 h-3" />
                                        {PROJECTS_COPY.featuredBadge}
                                    </div>
                                )}

                                {/* Images */}
                                <div className="relative h-56 overflow-hidden">
                                    <motion.div
                                        animate={{
                                            scale: hoveredProject === project.id ? 1.1 : 1
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className="h-full w-full"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    <div className={`absolute inset-0 bg-gradient-to-t ${
                                        isDark 
                                            ? 'from-gray-800 via-gray-800/50 to-transparent' 
                                            : 'from-gray-50 via-gray-50/50 to-transparent'
                                    }`} />

                                    {/* Overlay Actions */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                        className="absolute inset-0 flex items-center justify-center gap-4 bg-amber-600/80"
                                    >
                                        {project.liveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open live project: ${project.title}`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 rounded-full bg-white text-amber-600 shadow-lg"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </motion.a>
                                        )}
                                        {project.githubUrl && (
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open GitHub repository: ${project.title}`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 rounded-full bg-white text-amber-600 shadow-lg"
                                            >
                                                <Github className="w-5 h-5" />
                                            </motion.a>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className={`text-xl font-bold mb-3 ${
                                        isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-sm mb-4 line-clamp-2 ${
                                        isDark ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {project.shortDescription}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`px-3 py-1 text-xs rounded-full ${
                                                    isDark 
                                                        ? 'bg-gray-700 text-gray-300' 
                                                        : 'bg-gray-200 text-gray-700'
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Project Link */}
                                    {primaryCtaUrl && (
                                        <motion.a
                                            href={primaryCtaUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${primaryCtaLabel}: ${project.title}`}
                                            className="inline-flex items-center gap-2 text-amber-500 font-medium text-sm group/link"
                                            whileHover={{ x: 5 }}
                                        >
                                            {primaryCtaLabel}
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </motion.a>
                                    )}
                                </div>
                            </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/wende12github"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open all projects on GitHub"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-colors ${
                            isDark 
                                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                    >
                        <Github className="w-5 h-5" />
                        {PROJECTS_COPY.cta.viewAllGithub}
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
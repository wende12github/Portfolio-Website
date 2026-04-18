"use client";

import { BLOG_POSTS } from "@/lib/data/blog";
import { BLOG_SECTION_COPY } from "@/lib/data/blog-copy";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import Image from "next/image";
import Link from "next/link";


const categoryColors: Record<string, string> = {
    'AI/ML': 'from-amber-500 to-orange-500',
    'Mobile': 'from-orange-500 to-yellow-400',
    'Career': 'from-amber-500 to-orange-500',
    'Web': 'from-orange-500 to-amber-400',
    'Backend': 'from-amber-500 to-yellow-400',
    'General': 'from-gray-500 to-slate-600'
};

export function BlogSection() {
    const { isDark } = useIsDark();
    
    return(
        <section id="blog" 
            className={`py-24 sm:py-20 relative overflow-hidden ${
                isDark ? 'section-soft-gradient' : 'bg-white'
        }`}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
                    isDark ? 'bg-orange-500/5' : 'bg-orange-200/30'
                }`} />
            </div>

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
                        {BLOG_SECTION_COPY.eyebrow}
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        {BLOG_SECTION_COPY.headingPrefix}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300">
                            {BLOG_SECTION_COPY.headingHighlight}
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 mx-auto rounded-full" />
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8" aria-label="Latest blog posts">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`group rounded-3xl overflow-hidden border ${
                                isDark
                                    ? 'bg-gray-900/90 border-gray-700/60 shadow-lg shadow-black/20'
                                    : 'bg-white border-gray-200 shadow-md shadow-gray-200/70'
                            }`}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="h-full w-full">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </motion.div>
                                <div className={`absolute inset-0 bg-gradient-to-t ${
                                    isDark 
                                        ? 'from-gray-800 via-transparent to-transparent' 
                                        : 'from-gray-50 via-transparent to-transparent'
                                }`} />
                                
                                {/* Category Badge */}
                                <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${categoryColors[post.category ?? 'General']}`}>
                                    {post.category ?? 'General'}
                                </div>
                            </div>

                            {/* Content */}
                            <section className="p-6">
                                {/* Meta */}
                                <div className={`flex items-center gap-4 text-sm mb-4 ${
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className={`text-xl font-bold mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors ${
                                    isDark ? 'text-gray-100' : 'text-gray-900'
                                }`}>
                                    {post.title}
                                </h3>

                                <p className={`text-sm mb-4 line-clamp-2 ${
                                    isDark ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    {post.excerpt}
                                </p>

                                {/* Author & Read More */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                        <span className={`text-sm font-medium ${
                                            isDark ? 'text-gray-200' : 'text-gray-700'
                                        }`}>
                                            {post.author}
                                        </span>
                                    </div>
                                    <motion.div
                                        className="inline-flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                                                isDark
                                                    ? 'bg-gray-800 text-amber-500 hover:bg-gray-700'
                                                    : 'bg-amber-50 text-amber-700 hover:bg-amber-200'
                                            }`}
                                        >
                                            {BLOG_SECTION_COPY.readArticleCta}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </section>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold shadow-lg shadow-orange-500/25"
                    >
                        <Link href="/blog">{BLOG_SECTION_COPY.viewAllCta}</Link>
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
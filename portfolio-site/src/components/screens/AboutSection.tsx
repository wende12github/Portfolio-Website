"use client";

import { ACHIEVEMENTS, FADE_IN_UP, PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Rocket, Trophy } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import Image from 'next/image';
import { FaDownload } from "react-icons/fa";


// Icon map to convert string names to components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Trophy,
    Award,
    Rocket,
};

export function AboutSection() {
    const { isDark } = useIsDark();

    return (
        <section id="about" className={`py-24 sm:py-20 relative overflow-hidden ${
            isDark ? 'bg-gray-900' : 'bg-white'
        }`}>
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-1/2 w-96 h-96 rounded-full blur-3xl ${
                    isDark ? 'bg-violet-500/5' : 'bg-violet-200/30'
                }`} />
                <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl ${
                    isDark ? 'bg-purple-500/5' : 'bg-purple-200/30'
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
                    <span className="text-violet-500 font-semibold text-sm uppercase tracking-wider">
                        About Me
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        Passionate Developer &{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                            Innovator
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className={`relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto ${
                            isDark ? 'bg-gray-800' : 'bg-gray-100'
                        }`}>
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20" />
                            <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-violet-500/30" />
                            
                            {/* Profile Placeholder */}
                            <Image
                                src="/images/wendep.jpg"
                                alt={PERSONAL_INFO.name}
                                fill
                                className="object-cover"
                            />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-8 right-8 p-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg"
                            >
                                <Trophy className="w-6 h-6 text-white" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute bottom-8 left-8 p-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg"
                            >
                                <Award className="w-6 h-6 text-white" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`flex items-center gap-3 mb-6 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            <GraduationCap className="w-5 h-5 text-violet-500" />
                            <span>Software Engineering Student at AASTU</span>
                        </div>

                        <p className={`text-lg leading-relaxed mb-6 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            I'm a passionate software engineering student at{' '}
                            <span className="text-violet-500 font-semibold">
                                Addis Ababa Science and Technology University (AASTU)
                            </span>
                            . As a <span className="font-semibold">2025 AASTU Tech Fest 2nd place Hackathon Winner</span>,
                            I've proven my ability to build innovative solutions under pressure.
                        </p>

                        <p className={`text-lg leading-relaxed mb-8 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            As a <span className="text-blue-500 font-semibold">Team Leader</span> and{' '}
                            <span className="text-violet-500 font-semibold">Code Enthusiast</span>, I'm always 
                            hungry to build smarter tech. My expertise spans frontend, backend, mobile development,
                            and AI-powered solutions.
                        </p>

                        {/* Achievements Stats Grid */}
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center gap-1">
                            🚀 Achievements
                        </h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {ACHIEVEMENTS.map((achievement, index) => {
                                const Icon = iconMap[achievement.icon];
                                
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className={`p-4 rounded-2xl border transition-all ${
                                            isDark 
                                                ? 'bg-gray-800/50 border-gray-700 hover:border-violet-500/50' 
                                                : 'bg-gray-50 border-gray-200 hover:border-violet-500/50'
                                        }`}
                                    >
                                        {Icon && <Icon className={`w-6 h-6 mb-2 ${
                                            achievement.highlight ? 'text-amber-500' : 'text-violet-500'
                                        }`} />}
                                        <div className={`text-sm font-bold text-lg ${
                                            isDark ? 'text-blue-400' : 'text-blue-900'
                                        }`}>
                                            {achievement.title}
                                        </div>
                                        <div className={`text-xs ${
                                            isDark ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            {achievement.event}
                                        </div>
                                        {achievement.subtitle && (
                                            <div className={`text-xs mt-1 ${
                                                isDark ? 'text-gray-500' : 'text-gray-500'
                                            }`}>
                                                {achievement.subtitle}
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Description */}
                        <motion.p
                            variants={FADE_IN_UP}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            Whether leading a team through tight deadlines or architecting scalable code, 
                            My strong suits include team collaboration, project leadership, and delivering quality solutions under pressure.
                        </motion.p>

                        {/* CTA */}
                        <motion.div 
                            variants={FADE_IN_UP}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.a
                                href={PERSONAL_INFO.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-violet-500/25 hover:shadow-purple-500/40 transition-all"
                            >
                                <FaDownload className="w-4 h-4" />
                                Download Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
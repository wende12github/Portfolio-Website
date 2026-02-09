"use client";

import { FADE_IN_UP } from "@/lib/constants";
import { EXPERIENCES } from "@/lib/data/experiences";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaGraduationCap, FaMedal, FaQuoteLeft, FaTrophy } from "react-icons/fa";


// Icon map to dynamically render icons based on string names
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FaTrophy,
    FaMedal,
    FaGraduationCap,
};

export function ExperienceSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    return(
        <section id="experiences" 
            className={`py-24 sm:py-20 relative overflow-hidden ${
                isDark ? 'bg-gray-900' : 'bg-white'
        }`}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
                    isDark ? 'bg-violet-500/5' : 'bg-violet-200/30'
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
                        Experience
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        Experience{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                            & Highlights
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Experience Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid gap-6 mb-12"
                >
                    {EXPERIENCES.map((experience) => {
                        const Icon = iconMap[experience.icon];
                        
                        return (
                            <motion.div 
                                key={experience.id} 
                                variants={FADE_IN_UP}
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -5,
                                    boxShadow: isDark 
                                        ? '0 20px 40px rgba(139, 92, 246, 0.15)' 
                                        : '0 20px 40px rgba(0, 0, 0, 0.1)'
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`rounded-2xl p-6 cursor-pointer ${
                                    isDark 
                                        ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' 
                                        : 'bg-white shadow-lg border border-gray-100'
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${experience.bgColor} flex items-center justify-center`}>
                                        {Icon && <Icon className={`w-6 h-6 ${experience.iconColor}`} />}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                            <h3 className={`text-xl font-semibold ${
                                                isDark ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                {experience.title}
                                            </h3>
                                            <span className={`text-sm px-3 py-1 rounded-full w-fit ${
                                                isDark 
                                                    ? 'text-gray-400 bg-gray-600/50' 
                                                    : 'text-gray-500 bg-gray-100'
                                            }`}>
                                                {experience.date}
                                            </span>
                                        </div>
                                        <p className="text-blue-500 font-medium mb-2">
                                            {experience.organization}
                                        </p>
                                        <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                            {experience.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
                
                {/* Testimonial/Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
                        <div className="max-w-3xl mx-auto text-center">
                            <FaQuoteLeft className="w-8 h-8 mx-auto mb-4 opacity-50" />
                            <p className="text-lg md:text-xl mb-6 leading-relaxed">
                                Every project is a chance to learn something new from a teammate&apos;s perspective, 
                                a user&apos;s pain point, or a line of unexpected code.
                            <br /><br />
                                As a <strong>leader</strong>, I&apos;ve learned that great outcomes come from empathy, trust, and clear vision.
                            <br />
                                As a <strong>Django and full-stack developer</strong>, I&apos;ve learned how to turn big ideas into structured, scalable solutions.
                            <br />
                                And as a <strong>learner</strong>, I stay curious, always open to new challenges and smarter ways to build.
                            </p>
                            <p className="text-sm italic opacity-80">
                                &quot;Lead with vision, learn with humility, build with purpose.&quot;
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
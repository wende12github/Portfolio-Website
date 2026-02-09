"use client";

import { SKILLS } from "@/lib/data/skills";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Database, GitBranch, Palette, Server, Smartphone, Users } from "lucide-react";
import { useTheme } from "next-themes";
import { useMemo, useState } from "react";


// Map string icon names from SkillCategory to real lucide-react components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Server,
  Smartphone,
  Database,
  Brain,
  GitBranch,
  // Fallback for legacy "FaUsers"
  FaUsers: Users,
};

// Convert textual levels to progress percentages
const levelToPercent: Record<
  NonNullable<import("@/types").Skill["level"]>,
  number
> = {
  beginner: 25,
  intermediate: 50,
  advanced: 75,
  expert: 95,
};

export function SkillsSection(){
    const { theme } = useTheme();
    const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    const [activeCategory, setActiveCategory] = useState('frontend');

    const activeSkills = useMemo(
        () => SKILLS.find((c) => c.id === activeCategory),
        [activeCategory]
    );

    const ActiveIcon =
    (activeSkills?.icon && iconMap[activeSkills.icon]) || Palette;


    return (
        <section id="skills" className={`py-24 sm:py-20 relative overflow-hidden ${
            isDark ? 'bg-gray-950' : 'bg-gray-50'
        }`}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
                    isDark ? 'bg-violet-500/5' : 'bg-violet-200/20'
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
                        My Expertise
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        Skills &{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                            Technologies
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {SKILLS.map((category) => {
                        const TabIcon =
                            (category.icon && iconMap[category.icon]) || Palette;

                        return (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium transition-all ${
                                activeCategory === category.id
                                    ? `bg-gradient-to-r ${category.iconColor} text-white shadow-lg`
                                    : isDark
                                    ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                                    : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 shadow-sm"
                                }`}
                            >
                                <TabIcon className="w-5 h-5" />
                                {category.title}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Skills Display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`max-w-3xl mx-auto p-8 rounded-3xl ${
                        isDark ? "bg-gray-900/50" : "bg-white shadow-xl"
                        }`}
                    >
                        {activeSkills && (
                        <>
                            <div className="flex items-center gap-3 mb-8">
                            <div
                                className={`p-3 rounded-xl bg-gradient-to-r ${activeSkills.iconColor}`}
                            >
                                <ActiveIcon className="w-6 h-6 text-white" />
                            </div>
                            <h3
                                className={`text-2xl font-bold ${
                                isDark ? "text-white" : "text-gray-900"
                                }`}
                            >
                                {activeSkills.title}
                            </h3>
                            </div>

                            <div className="space-y-6">
                            {activeSkills.skills.map((skill, index) => {
                                const percent =
                                levelToPercent[skill.level ?? "beginner"];

                                return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex justify-between mb-2">
                                    <span
                                        className={`font-medium ${
                                        isDark ? "text-gray-300" : "text-gray-700"
                                        }`}
                                    >
                                        {skill.name}
                                    </span>
                                    <span
                                        className={`text-sm ${
                                        isDark ? "text-gray-500" : "text-gray-400"
                                        }`}
                                    >
                                        {skill.level}
                                    </span>
                                    </div>
                                    <div
                                    className={`h-3 rounded-full overflow-hidden ${
                                        isDark ? "bg-gray-800" : "bg-gray-200"
                                    }`}
                                    >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percent}%` }}
                                        transition={{
                                        duration: 1,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                        }}
                                        className={`h-full rounded-full bg-gradient-to-r ${activeSkills.iconColor}`}
                                    />
                                    </div>
                                </motion.div>
                                );
                            })}
                            </div>
                        </>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* All Skills Overview */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                    {SKILLS.map((category, index) => {
                        const GridIcon =
                        (category.icon && iconMap[category.icon]) || Palette;

                        return (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            onClick={() => setActiveCategory(category.id)}
                            className={`p-6 rounded-2xl text-center cursor-pointer transition-all border ${
                            activeCategory === category.id
                                ? `bg-gradient-to-r ${category.iconColor} border-transparent`
                                : isDark
                                ? "bg-gray-900 border-gray-800 hover:border-violet-500/50"
                                : "bg-white border-gray-200 hover:border-violet-500/50 shadow-sm"
                            }`}
                        >
                            <GridIcon
                            className={`w-8 h-8 mx-auto mb-3 ${
                                activeCategory === category.id
                                ? "text-white"
                                : "text-violet-500"
                            }`}
                            />
                            <h4
                            className={`font-semibold text-sm ${
                                activeCategory === category.id
                                ? "text-white"
                                : isDark
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                            >
                            {category.title}
                            </h4>
                            <p
                            className={`text-xs mt-1 ${
                                activeCategory === category.id
                                ? "text-white/80"
                                : isDark
                                ? "text-gray-500"
                                : "text-gray-400"
                            }`}
                            >
                            {category.skills.length} skills
                            </p>
                        </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
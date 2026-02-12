"use client";

import { SKILLS } from "@/lib/data/skills";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Database, GitBranch, Palette, Server, Smartphone, Users } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import { useMemo, useState } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaPhp,
    FaJava,
    FaReact,
    FaAndroid,
    FaGitAlt,
    FaDocker,
    FaTasks,
    FaPuzzlePiece,
    FaComments,
    FaUserTie,
    FaHandshake,
    FaBrain,
    FaRobot,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiFlutter,
    SiPostgresql,
    SiMongodb,
    SiTensorflow,
    SiSupabase,
    SiFirebase,
    SiCplusplus,
} from "react-icons/si";


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

// Map skill.icon strings from data to real react-icons components
const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    // Frontend
    FaHtml5: FaHtml5,
    CssAlt: FaCss3Alt,
    NextJs: SiNextdotjs,
    Ts: SiTypescript,
    // Backend
    Python: FaPython,
    FaPython: FaPython,
    FaPhp: FaPhp,
    FaJava: FaJava,
    // Mobile
    SiFlutter: SiFlutter,
    FaReact: FaReact,
    FaAndroid: FaAndroid,
    // Databases
    SiPostgresql: SiPostgresql,
    MongoDB: SiMongodb,
    Firebase: SiFirebase,
    Supabase: SiSupabase,
    // AI/ML
    FaBrain: FaBrain,
    TensorFlow: SiTensorflow,
    Robot: FaRobot,
    // Tools & DevOps
    FaGitAlt: FaGitAlt,
    GitAlt: FaGitAlt,
    SiCplusplus: SiCplusplus,
    FaDocker: FaDocker,
    // Soft skills
    FaTasks: FaTasks,
    FaPuzzlePiece: FaPuzzlePiece,
    FaComments: FaComments,
    FaUserTie: FaUserTie,
    FaHandshake: FaHandshake,
};


// Brand colors by skill icon (hex values)
const skillBrandColor: Record<string, string> = {
    // Frontend
    FaHtml5: "#E34F26",
    CssAlt: "#1572B6",
    NextJs: "#000000",
    Ts: "#3178C6",
    // Backend
    Python: "#3776AB",
    FaPython: "#3776AB",
    FaPhp: "#777BB4",
    FaJava: "#E76F00",
    // Mobile
    SiFlutter: "#02569B",
    FaReact: "#61DAFB",
    FaAndroid: "#3DDC84",
    // Databases
    SiPostgresql: "#336791",
    MongoDB: "#47A248",
    Firebase: "#FFCA28",
    Supabase: "#3ECF8E",
    // AI/ML
    FaBrain: "#F59E0B",
    TensorFlow: "#FF6F00",
    Robot: "#74AA9C",
    // Tools & DevOps
    FaGitAlt: "#F1502F",
    GitAlt: "#F1502F",
    SiCplusplus: "#00599C",
    FaDocker: "#2496ED",
    // Soft skills (generic accent colors)
    FaTasks: "#22C55E",
    FaPuzzlePiece: "#3B82F6",
    FaComments: "#6B7280",
    FaUserTie: "#10B981",
    FaHandshake: "#0EA5E9",
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
    const { isDark } = useIsDark();

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
                                const SkillIcon = skill.icon ? skillIconMap[skill.icon] : undefined;
                                const brandColor = skill.icon ? skillBrandColor[skill.icon] : undefined;

                                return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {SkillIcon && (
                                                <SkillIcon className={
                                                    `w-5 h-5 ${brandColor ? `text-[${brandColor}]` : (isDark ? "#8B5CF6" : "#7C3AED")}`
                                                } />
                                            )}
                                            <span
                                                className={`font-medium ${
                                                    isDark ? "text-gray-300" : "text-gray-700"
                                                }`}
                                            >
                                                {skill.name}
                                            </span>
                                        </div>
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
                className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4"
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
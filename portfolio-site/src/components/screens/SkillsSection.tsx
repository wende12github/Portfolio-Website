"use client";

import { SKILLS } from "@/lib/data/skills";
import { motion } from "framer-motion";
import {
    Brain,
    ChevronLeft,
    ChevronRight,
    Database,
    GitBranch,
    Palette,
    Server,
    Smartphone,
    Users,
} from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
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
    FaNodeJs,
    FaDatabase,
    FaLink,
    FaSyncAlt,
    FaMicrophone,
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
    SiDart,
    SiExpress,
    SiJavascript,
    SiPostman,
    SiRedis,
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
const skillIconMap: Record<string, React.ComponentType<{ className?: string; style?: CSSProperties }>> = {
    // Frontend
    FaHtml5: FaHtml5,
    CssAlt: FaCss3Alt,
    React: FaReact,
    NextJs: SiNextdotjs,
    Ts: SiTypescript,
    Js: SiJavascript,
    // Backend
    Python: FaPython,
    FaPython: FaPython,
    NodeJs: FaNodeJs,
    Express: SiExpress,
    Api: FaLink,
    FaPhp: FaPhp,
    FaJava: FaJava,
    // Mobile
    SiFlutter: SiFlutter,
    Dart: SiDart,
    FaReact: FaReact,
    FaAndroid: FaAndroid,
    // Databases
    Sql: FaDatabase,
    SiPostgresql: SiPostgresql,
    MongoDB: SiMongodb,
    Redis: SiRedis,
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
    Postman: SiPostman,
    // Soft skills
    Agile: FaSyncAlt,
    Speaking: FaMicrophone,
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
    React: "#61DAFB",
    NextJs: "#000000",
    Ts: "#3178C6",
    Js: "#F7DF1E",
    // Backend
    Python: "#3776AB",
    FaPython: "#3776AB",
    NodeJs: "#339933",
    Express: "#111827",
    Api: "#F59E0B",
    FaPhp: "#777BB4",
    FaJava: "#E76F00",
    // Mobile
    SiFlutter: "#02569B",
    Dart: "#0175C2",
    FaReact: "#61DAFB",
    FaAndroid: "#3DDC84",
    // Databases
    Sql: "#6B7280",
    SiPostgresql: "#336791",
    MongoDB: "#47A248",
    Redis: "#DC382D",
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
    Postman: "#FF6C37",
    // Soft skills (generic accent colors)
    Agile: "#F59E0B",
    Speaking: "#EF4444",
    FaTasks: "#22C55E",
    FaPuzzlePiece: "#3B82F6",
    FaComments: "#6B7280",
    FaUserTie: "#10B981",
    FaHandshake: "#0EA5E9",
};

export function SkillsSection(){
    const { isDark } = useIsDark();

    const categories = useMemo(() => SKILLS, []);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Autoplay (3s), pauses on hover, loops infinitely
    useEffect(() => {
        if (isPaused || categories.length <= 1) return;

        const timer: ReturnType<typeof setInterval> = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % categories.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [isPaused, categories.length]);

    const goPrev = () =>
        setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);

    const goNext = () =>
        setActiveIndex((prev) => (prev + 1) % categories.length);

    const getCircularOffset = (index: number) => {
        const raw = index - activeIndex;
        const half = Math.floor(categories.length / 2);
        if (raw > half) return raw - categories.length;
        if (raw < -half) return raw + categories.length;
        return raw;
    };


    return (
        <section id="skills" className={`py-24 sm:py-20 relative overflow-hidden ${
            isDark ? 'section-soft-gradient' : 'bg-gray-50'
        }`}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
                    isDark ? 'bg-amber-500/5' : 'bg-amber-200/20'
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
                        My Expertise
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        Skills &{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300">
                            Technologies
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 mx-auto rounded-full" />
                </motion.div>

                {/* 3D Perspective Horizontal Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Navigation arrows */}
                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous skill category"
                        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full grid place-items-center border transition-colors ${
                            isDark
                                ? "bg-gray-900/70 border-gray-700 text-white hover:bg-gray-800"
                                : "bg-white/90 border-gray-200 text-gray-900 hover:bg-gray-50"
                        }`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next skill category"
                        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full grid place-items-center border transition-colors ${
                            isDark
                                ? "bg-gray-900/70 border-gray-700 text-white hover:bg-gray-800"
                                : "bg-white/90 border-gray-200 text-gray-900 hover:bg-gray-50"
                        }`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Cards stage */}
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.15}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -80) goNext();
                            if (info.offset.x > 80) goPrev();
                        }}
                        style={{ perspective: "1000px" }}
                        className="relative h-[420px] sm:h-[440px] overflow-x-hidden flex items-center justify-center"
                    >
                        {categories.map((category, index) => {
                            const offset = getCircularOffset(index);
                            const isActive = offset === 0;
                            const rotateY = isActive ? 0 : offset > 0 ? -25 : 25;
                            const scale = isActive ? 1 : 0.8;
                            const opacity = isActive ? 1 : 0.6;
                            const zIndex = isActive ? 10 : 10 - Math.abs(offset);
                            const x = offset * 260;

                            const CategoryIcon =
                                (category.icon && iconMap[category.icon]) || Palette;

                            return (
                                <motion.article
                                    key={category.id}
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Skill category: ${category.title}`}
                                    className={`absolute left-1/2 -translate-x-1/2 w-[320px] sm:w-[420px] h-[360px] sm:h-[400px] cursor-pointer select-none rounded-3xl border p-8 sm:p-10 flex flex-col ${
                                        isDark
                                            ? "bg-gray-700/60 border-gray-800"
                                            : "bg-white border-gray-100 shadow-xl"
                                    }`}
                                    initial={false}
                                    animate={{
                                        x,
                                        rotateY,
                                        scale,
                                        opacity,
                                        zIndex,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.4, 0, 0.2, 1],
                                    }}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div
                                            className={`p-3 rounded-2xl bg-gradient-to-r ${category.iconColor}`}
                                        >
                                            <CategoryIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3
                                                className={`text-xl font-bold ${
                                                    isDark ? "text-white" : "text-gray-900"
                                                }`}
                                            >
                                                {category.title}
                                            </h3>
                                            <p
                                                className={`text-sm ${
                                                    isDark ? "text-gray-400" : "text-gray-600"
                                                }`}
                                            >
                                                {category.skills.length} skills
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden columns-[170px] sm:columns-[190px] [column-gap:0.75rem]">
                                        {category.skills.map((skill) => {
                                            const SkillIcon = skill.icon
                                                ? skillIconMap[skill.icon]
                                                : undefined;
                                            const brandColor = skill.icon
                                                ? skillBrandColor[skill.icon]
                                                : undefined;

                                            return (
                                                <div key={skill.name} className="break-inside-avoid mb-2">
                                                    <div
                                                        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm border ${
                                                            isDark
                                                                ? "bg-gray-800/60 border-gray-700 text-gray-200"
                                                                : "bg-gray-50 border-gray-200 text-gray-700"
                                                        }`}
                                                    >
                                                        {SkillIcon && (
                                                            <SkillIcon
                                                                className="w-4 h-4"
                                                                style={{
                                                                    color:
                                                                        brandColor ??
                                                                        (isDark
                                                                            ? "#F59E0B"
                                                                            : "#D97706"),
                                                                }}
                                                            />
                                                        )}
                                                        <span className="leading-none">{skill.name}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
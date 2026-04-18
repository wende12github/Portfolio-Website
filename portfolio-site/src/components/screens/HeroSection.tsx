"use client";

import { HERO_SKILLS, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { HERO_COPY } from "@/lib/data/home-copy";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Trophy } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import Image from "next/image";
import { useEffect, useState } from "react";


const typingSpeed = 80;
const deletingSpeed = 50;
const pauseDuration = 1800;

const SHOOTING_STARS = [
    { top: "8%", left: "7%", duration: 2.4, delay: 0.3 },
    { top: "18%", left: "21%", duration: 3.0, delay: 1.1 },
    { top: "28%", left: "36%", duration: 2.6, delay: 2.0 },
    { top: "35%", left: "51%", duration: 3.2, delay: 2.8 },
    { top: "11%", left: "64%", duration: 2.8, delay: 3.4 },
    { top: "24%", left: "77%", duration: 3.4, delay: 4.2 },
    { top: "16%", left: "90%", duration: 2.5, delay: 4.9 },
    { top: "41%", left: "58%", duration: 3.1, delay: 5.6 },
];

export function HeroSection() {
    const { isDark } = useIsDark();
    const prefersReducedMotion = useReducedMotion();

    const [displayText, setDisplayedText] = useState("");
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const currentRole = HERO_SKILLS[currentRoleIndex];

        if (!isDeleting && displayText.length < currentRole.length) {
            // Typing forward
            timer = setTimeout(() => {
                setDisplayedText(currentRole.slice(0, displayText.length + 1));
            }, typingSpeed);
        } else if (isDeleting && displayText.length > 0) {
            // Deleting backward
            timer = setTimeout(() => {
                setDisplayedText(currentRole.slice(0, displayText.length - 1));
            }, deletingSpeed);
        } else if (!isDeleting && displayText.length === currentRole.length) {
            // Pause at end → then start deleting
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, pauseDuration);
        } else if (isDeleting && displayText.length === 0) {
            // Finished deleting → move to next role
            timer = setTimeout(() => {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % HERO_SKILLS.length);
            }, 0);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <motion.section id="home" 
            className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
                isDark ? "section-soft-gradient" : "bg-gray-50"
            }`}
            initial={isDark ? { backgroundPosition: "0% 50%" } : undefined}
            whileInView={isDark ? { backgroundPosition: "100% 50%" } : undefined}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 ${
                        isDark
                        ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400/20 via-gray-700/15 to-gray-900/10"
                        : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100 via-gray-50 to-gray-50"
                    }`}
                />

                {/* Shooting Stars */}
                {!prefersReducedMotion && SHOOTING_STARS.map((star, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            top: star.top,
                            left: star.left,
                            boxShadow: '0 0 6px 2px rgba(255,255,255,0.6), 0 0 12px 4px rgba(59, 130, 246, 0.4)'
                        }}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x: [0, -200, -400],
                            y: [0, 100, 200],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: 'linear'
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400/15 to-yellow-300/15 border border-amber-400/35 mb-8"
                        >
                            <Trophy className="w-6 h-6 text-amber-400" />
                            <span className={`text-sm font-medium ${isDark ? 'text-amber-200' : 'text-amber-700'}`}>
                                {HERO_COPY.badge}
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}
                        >
                            {HERO_COPY.greetingPrefix}{' '}
                            <span className="relative">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200">
                                    {PERSONAL_INFO.name.split(' ')[0].toUpperCase()}
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                />
                            </span>
                        </motion.h1>

                        {/* Animated Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="h-10 sm:h-12 md:h-14 mb-8"
                        >
                            <span className="text-xl sm:text-2xl md:text-3xl font-light text-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-200">
                                {displayText}
                                <motion.span
                                    animate={prefersReducedMotion ? undefined : { opacity: [1, 0] }}
                                    transition={prefersReducedMotion ? undefined : { duration: 0.5, repeat: Infinity }}
                                    className="inline-block w-0.5 h-6 sm:h-8 md:h-10 bg-gradient-to-b from-orange-400 to-amber-300 ml-1 align-middle"
                                />
                            </span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className={`text-base sm:text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 ${
                                isDark ? 'text-gray-200' : 'text-gray-600'
                            }`}
                        >
                            {HERO_COPY.description.intro}{' '}
                            <span className="font-bold">{HERO_COPY.description.frontend}</span>,{' '}
                            {HERO_COPY.description.middle}{' '}
                            <span className="font-bold">{HERO_COPY.description.backend}</span>, {HERO_COPY.description.and}{' '}
                            intelligent <span className="font-bold">{HERO_COPY.description.mobile}</span>{' '}
                            {HERO_COPY.description.outro}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className={`text-base sm:text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 ${
                                isDark ? 'text-gray-200' : 'text-gray-600'
                            }`}
                        >
                            {HERO_COPY.story.intro}{' '}
                            <span className="font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
                                {HERO_COPY.story.highlight}
                            </span>{' '}
                            {HERO_COPY.story.outro}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                        >
                            <motion.a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/25 hover:shadow-amber-400/40 transition-shadow"
                            >
                                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                                {HERO_COPY.cta.work}
                            </motion.a>
                            <motion.a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-8 py-4 rounded-2xl font-semibold text-lg border-2 transition-colors ${
                                    isDark 
                                        ? 'border-gray-700 text-white hover:bg-gray-800' 
                                        : 'border-gray-200 text-gray-900 hover:bg-gray-100'
                                }`}
                            >
                                {HERO_COPY.cta.contact}
                            </motion.a>
                        </motion.div>

                    </div>
                    {/* Profile Photo - Right Side */}
                    <div className="relative flex-shrink-0">
                        {/* Outer Glowing Ring - Separate from photo */}
                        <motion.div
                            animate={{ 
                                boxShadow: [
                                    '0 0 60px rgba(251, 146, 60, 0.55), 0 0 120px rgba(250, 204, 21, 0.35)',
                                    '0 0 80px rgba(245, 158, 11, 0.6), 0 0 150px rgba(251, 191, 36, 0.35)',
                                    '0 0 60px rgba(251, 146, 60, 0.55), 0 0 120px rgba(250, 204, 21, 0.35)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-transparent"
                            style={{
                                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(250, 204, 21, 0.3))',
                                backgroundClip: 'padding-box'
                            }}
                        />
                        
                        {/* Rotating Gradient Border Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #f97316, #f59e0b, #facc15, #f97316)',
                                padding: '4px'
                            }}
                        >
                            <div className={`w-full h-full rounded-full ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'}`} />
                        </motion.div>

                        {/* Profile Image Container - Static with zoom effect */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                            style={{ margin: '4px' }}
                        >
                            <motion.div
                                animate={prefersReducedMotion ? undefined : { scale: [1, 1.05, 1] }}
                                transition={prefersReducedMotion ? undefined : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={PERSONAL_INFO.profileImage}
                                    alt="Wendmagegn"
                                    fill
                                    sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, 16rem"
                                    className="object-cover rounded-full"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="mt-20 flex items-center justify-center lg:justify-start gap-4 overflow-visible"
                        >
                            {SOCIAL_LINKS.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={prefersReducedMotion ? undefined : { scale: 1.18, y: -12 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.06, duration: 0.18 }}
                                    className={`group relative z-0 p-3 rounded-xl transition-all duration-100 hover:z-10 ${
                                        isDark 
                                            ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:shadow-[0_14px_24px_-12px_rgba(251,146,60,0.7)] hover:ring-4 hover:ring-white/25' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-[0_12px_22px_-12px_rgba(249,115,22,0.45)] hover:ring-4 hover:ring-black/15'
                                    } ${social.color} duration-100`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-6 h-6 transition-transform duration-100 group-hover:scale-110" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`flex flex-col items-center gap-2 ${
                            isDark ? 'text-gray-500' : 'text-gray-400'
                        }`}
                    >
                        <span className="text-sm">{HERO_COPY.scroll}</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
}
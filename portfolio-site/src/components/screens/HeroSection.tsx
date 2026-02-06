"use client";

import { FADE_IN_UP, HERO_SKILLS, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Award, Code2, Heart, Sparkles, Trophy } from "lucide-react";
import { useTheme } from "next-themes";
import { PROXY_FILENAME } from "next/dist/lib/constants";
import { useEffect, useState } from "react";


const typingSpeed = 80;
const deletingSpeed = 50;
const pauseDuration = 1800;

export function HeroSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    const [displayText, setDisplayedText] = useState("");
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

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
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % HERO_SKILLS.length);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex]);

    // Blinking cursor effect
    useEffect(() => {
        const interval = setInterval(() => setBlink((prev) => !prev), 550);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" 
            className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
                isDark ? "bg-gray-800/30" : "bg-gray-50"
            }`} 
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 ${
                        isDark
                        ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950"
                        : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100 via-gray-50 to-gray-50"
                    }`}
                />
                {/* Floating Orbs
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full blur-3xl ${
                            isDark ? 'bg-blue-500/10' : 'bg-blue-300/30'
                        }`}
                        style={{
                            width: Math.random() * 400 + 200,
                            height: Math.random() * 400 + 200,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))} */}

                {/* Grid Pattern */}
                <div className={`absolute inset-0 ${
                    isDark 
                        ? 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]'
                        : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'
                } bg-[size:50px_50px]`} />

                {/* Shooting Stars */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 50}%`,
                            left: `${Math.random() * 100}%`,
                            boxShadow: '0 0 6px 2px rgba(255,255,255,0.6), 0 0 12px 4px rgba(59, 130, 246, 0.4)'
                        }}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x: [0, -200, -400],
                            y: [0, 100, 200],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 1.5 + Math.random() * 3,
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 mb-8"
                        >
                            <Trophy className="w-6 h-6 text-blue-500" />
                            <span className={`text-sm font-medium ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                                2025 AASTU Tech Fest Hackathon 2nd place Winner
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
                            Hey, I&apos;m{' '}
                            <span className="relative">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600">
                                    {PERSONAL_INFO.name.split(' ')[0].toUpperCase()}
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 rounded-full"
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
                            <span className="text-xl sm:text-2xl md:text-3xl font-light text-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500/70">
                                {displayText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="inline-block w-0.5 h-6 sm:h-8 md:h-10 bg-gradient-to-b from-blue-500 to-purple-500 ml-1 align-middle"
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
                            Crafting elegant <span className="text-blue-500 font-medium">Frontends</span>, 
                            robust <span className="text-purple-500 font-medium">Backends</span>, and 
                            intelligent <span className="text-purple-600 font-medium">Mobile solutions</span> with 
                            a full stack mindset and AI Powered solutions.
                        </motion.p>

                        <motion.p
                            variants={FADE_IN_UP}
                            className="text-gray-600 dark:text-gray-300 mb-8"
                        >
                            A passionate software engineering student at AASTU.{' '}
                            <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            2025 AASTU Tech Fest Hackathon Winner,
                            </span>{' '}
                            team leader, code enthusiast and always hungry to build smarter tech.
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
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-purple-500/40 transition-shadow"
                            >
                                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                                View My Work
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
                                Get In Touch
                            </motion.a>
                        </motion.div>

                    </div>
                    {/* Profile Photo - Right Side */}
                    <div className="relative flex-shrink-0">
                        {/* Outer Glowing Ring - Separate from photo */}
                        <motion.div
                            animate={{ 
                                boxShadow: [
                                    '0 0 60px rgba(59, 130, 246, 0.6), 0 0 120px rgba(147, 51, 234, 0.4)',
                                    '0 0 80px rgba(147, 51, 234, 0.6), 0 0 150px rgba(59, 130, 246, 0.4)',
                                    '0 0 60px rgba(59, 130, 246, 0.6), 0 0 120px rgba(147, 51, 234, 0.4)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-transparent"
                            style={{
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
                                backgroundClip: 'padding-box'
                            }}
                        />
                        
                        {/* Rotating Gradient Border Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #a855f7, #3b82f6)',
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
                            <motion.img
                                src={PERSONAL_INFO.profileImage}
                                alt="Wendmagegn"
                                className="w-full h-full object-cover rounded-full"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </motion.div>
                        <br />
                        <br />
                        <br />
                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex items-center justify-center lg:justify-start gap-4"
                        >
                            {SOCIAL_LINKS.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                    className={`p-3 rounded-xl transition-colors ${
                                        isDark 
                                            ? 'bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700' 
                                            : 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200'
                                    }`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-6 h-6" />
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
                        <span className="text-sm">Scroll Down</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
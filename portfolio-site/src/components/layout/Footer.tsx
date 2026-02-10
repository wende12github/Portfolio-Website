"use client";

import { NAV_ITEMS, SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail, Phone, MapPin } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import Image from "next/image";


export function Footer() {
    const { isDark } = useIsDark();

    // Smooth scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    };

    return (
    // Main footer container with padding and background color based on theme
        <footer
        className={`relative pt-16 pb-8 ${
            isDark ? "bg-gray-900" : "bg-white"
        }`}
        >
        {/* Decorative top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Three-column grid on medium+ screens */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand / About */}
            <div>
                <motion.a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                }}
                className="inline-flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.05 }}
                >
                <Image
                    src="/images/w-logo.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="rounded-lg"
                />
                <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    WEND
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                    MAGEGN
                    </span>
                </span>
                </motion.a>

                {/* Short bio / tagline */}
                <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Building innovative solutions with passion and precision.
                <br />
                Always hungry to learn and create smarter tech.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                Quick Links
                </h4>
                <ul className="space-y-2">
                {NAV_ITEMS.map((link) => (
                    <li key={link.label}>
                    <motion.a
                        href={link.href}
                        onClick={(e) => {
                        e.preventDefault();
                        // Find element with matching id and scroll smoothly
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        whileHover={{ x: 5 }} // nice little hover animation
                        className={`text-sm transition-colors ${
                        isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                        }`}
                    >
                        {link.label}
                    </motion.a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Social / Connect */}
            <div>
                <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                Connect
                </h4>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-4">
                    <a 
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className={`flex items-center gap-2 text-sm transition-colors ${
                            isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                        }`}
                    >
                        <Mail className="w-4 h-4" />
                        {PERSONAL_INFO.email}
                    </a>
                    <a 
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className={`flex items-center gap-2 text-sm transition-colors ${
                            isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                        }`}
                    >
                        <Phone className="w-4 h-4" />
                        {PERSONAL_INFO.phone}
                    </a>
                    <div className={`flex items-center gap-2 text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                        <MapPin className="w-4 h-4" />
                        {PERSONAL_INFO.location}
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                    <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl transition-colors ${
                        isDark
                        ? "bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200"
                    }`}
                    aria-label={social.name}
                    >
                    <social.icon />
                    </motion.a>
                ))}
                </div>
            </div>
            </div>

            {/* Thin horizontal divider */}
            <div className={`border-t ${isDark ? "border-gray-800" : "border-gray-200"}`} />

            {/* Bottom row – copyright + made with love */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights are reserved.
            </p>

            <p className={`text-sm flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Made with NextJS and Tailwind CSS in Ethiopia
            </p>
            </div>
        </div>

        {/* Floating "Scroll to Top" button – appears fixed bottom-right */}
        <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 z-50"
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5" />
        </motion.button>
        </footer>
    );
}
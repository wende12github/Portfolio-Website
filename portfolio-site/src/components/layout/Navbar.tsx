"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsDark } from "@/hooks/useIsDark";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const { setTheme } = useTheme();
  const { isDark, mounted } = useIsDark();

    // Scroller handler
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

          // Slightly tilt the shared section gradient while scrolling for a smoother motion feel.
          const scrollTilt = Math.max(-3.5, Math.min(3.5, window.scrollY * 0.004));
          document.documentElement.style.setProperty("--section-scroll-tilt", `${scrollTilt}deg`);

            const sections = NAV_ITEMS.map((item) => item.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
          window.removeEventListener("scroll", handleScroll);
          document.documentElement.style.setProperty("--section-scroll-tilt", "0deg");
        };
    }, []);

    // Smooth Scroll helper
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    // JSX
    return (
    <motion.nav
      aria-label="Primary"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-amber-500/10"
            : "bg-white/90 backdrop-blur-xl shadow-2xl shadow-amber-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Name */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="relative group flex items-center gap-2 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to home section"
          >
            <Image
              src="/images/w-logo.png"
              alt="Logo"
              width={60}
              height={60}
              // className="rounded-lg sm:w-[50px] sm:h-[50px]"
            />
            
            <span className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap">
              WENDMAGEGN
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  activeSection === item.href.slice(1)
                    ? "text-amber-500"
                    : isDark
                      ? "text-gray-300 hover:text-amber-300"
                      : "text-gray-700 hover:text-amber-600"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav" // ← shared layout animation between items
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Theme toggle + Mobile menu button */}
          <div className="flex items-center gap-4">
            {/* Theme toggle button */}
            <motion.button
              onClick={() => setTheme((mounted && isDark) ? "light" : "dark")}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              aria-label={`Switch to ${mounted && isDark ? "light" : "dark"} mode`}
              className={`p-2.5 rounded-xl ${
                mounted && isDark
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {/* Render deterministic icon until mounted */}
              {mounted ? (
                isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`md:hidden p-2.5 rounded-xl ${
                isDark
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-navigation"
            className={`md:hidden overflow-hidden ${
              isDark ? "bg-gray-900/95" : "bg-white/95"
            } backdrop-blur-xl`}
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.href.slice(1)
                      ? "bg-gradient-to-r from-orange-500/10 to-yellow-300/10 text-amber-500"
                      : isDark
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
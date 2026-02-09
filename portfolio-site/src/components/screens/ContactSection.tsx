"use client";

import { FADE_IN_UP, PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Icon, Loader2, MessageCircle, Send, Smartphone } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export function ContactSection() {
    const { isDark } = useIsDark();
    
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            setFormState({name: '', email: '', subject: '', message: ''});
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return(
        <section id="contact" 
            className={`py-24 sm:py-20 relative overflow-hidden ${
                isDark ? 'bg-gray-950' : 'bg-gray-50'
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
                        Get In Touch
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        Let's Work{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                            Together
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className={`text-2xl font-bold mb-6 ${
                            isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                            Let&apos;s work together!
                        </h3>
                        <p className={`text-lg mb-8 leading-relaxed ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities 
                            to be part of your visions. Feel free to reach out through any of the channels below.
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-4 mb-8">
                            <motion.div 
                                variants={FADE_IN_UP}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                            >
                                {/* Email Card */}
                                <motion.a
                                    href={`mailto:${PERSONAL_INFO.email}`}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    target="_blank"
                                    className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                    >
                                        <FaEnvelope className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email Me</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm break-all">
                                        {PERSONAL_INFO.email}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                                        Send email
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.a>

                                {/* Phone Card */}
                                <motion.a
                                    href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    target='_blank'
                                    className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:shadow-green-500/10 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Smartphone className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Call Me</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {PERSONAL_INFO.phone}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium">
                                        Make a call
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.a>

                                {/* Location Card */}
                                <motion.div
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <FaMapMarkerAlt className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 cursor-pointer dark:text-white mb-2">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {PERSONAL_INFO.location}
                                    </p>
                                    <div className="mt-4 text-purple-600 dark:text-purple-400 text-sm font-medium">
                                        Available for remote work
                                    </div>
                                </motion.div>
                                {/* Social Links */}
                                <div>
                                    <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Or Connect with Me on Social Media
                                    </p>
                                    <div className="flex gap-3">
                                        {SOCIAL_LINKS.map((social, index) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`p-4 rounded-xl transition-all ${
                                                    isDark 
                                                        ? 'bg-gray-900 text-gray-400 hover:bg-gray-800' 
                                                        : 'bg-white text-gray-600 shadow-sm hover:shadow-lg'
                                                } ${social.color}`}
                                                aria-label={social.name}
                                            >
                                                <social.icon className="w-5 h-5" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className={`p-8 rounded-3xl ${
                            isDark ? 'bg-gray-900' : 'bg-white shadow-xl'
                        }`}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Send a Message
                                </h3>
                            </div>

                            <div className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDark ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${
                                                isDark 
                                                    ? 'bg-gray-800 border-gray-700 text-white focus:border-violet-500' 
                                                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500'
                                            }`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDark ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${
                                                isDark 
                                                    ? 'bg-gray-800 border-gray-700 text-white focus:border-violet-500' 
                                                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500'
                                            }`}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${
                                        isDark ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${
                                            isDark 
                                                ? 'bg-gray-800 border-gray-700 text-white focus:border-violet-500' 
                                                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500'
                                        }`}
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium mb-2 ${
                                        isDark ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-xl border transition-all outline-none resize-none ${
                                            isDark 
                                                ? 'bg-gray-800 border-gray-700 text-white focus:border-violet-500' 
                                                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500'
                                        }`}
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                                        status === 'success'
                                            ? 'bg-green-500'
                                            : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-violet-500/25'
                                    }`}
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 cursor-pointer" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
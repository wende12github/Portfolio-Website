"use client";

import { BLOG_POSTS } from "@/lib/data/blog";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";


const categoryColors: Record<string, string> = {
    'AI/ML': 'from-violet-500 to-purple-500',
    'Mobile': 'from-pink-500 to-rose-500',
    'Career': 'from-amber-500 to-orange-500',
    'Web': 'from-blue-500 to-cyan-500',
    'Backend': 'from-violet-500 to-cyan-500',
    'General': 'from-gray-500 to-slate-600'
};

export function BlogSection() {
    const { isDark } = useIsDark();
    
    return(
        <section id="blog" 
            className={`py-24 sm:py-20 relative overflow-hidden ${
                isDark ? 'bg-gray-900' : 'bg-white'
        }`}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
                    isDark ? 'bg-violet-500/5' : 'bg-blue-200/30'
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
                        Blog
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        Latest{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            Articles
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`group rounded-3xl overflow-hidden ${
                                isDark ? 'bg-gray-800' : 'bg-gray-50'
                            }`}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <motion.img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${
                                    isDark 
                                        ? 'from-gray-800 via-transparent to-transparent' 
                                        : 'from-gray-50 via-transparent to-transparent'
                                }`} />
                                
                                {/* Category Badge */}
                                <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${categoryColors[post.category ?? 'General']}`}>
                                    {post.category ?? 'General'}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta */}
                                <div className={`flex items-center gap-4 text-sm mb-4 ${
                                    isDark ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className={`text-xl font-bold mb-3 line-clamp-2 group-hover:text-violet-500 transition-colors ${
                                    isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {post.title}
                                </h3>

                                <p className={`text-sm mb-4 line-clamp-2 ${
                                    isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    {post.excerpt}
                                </p>

                                {/* Author & Read More */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                        <span className={`text-sm font-medium ${
                                            isDark ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            {post.author}
                                        </span>
                                    </div>
                                    <motion.a
                                        href="#"
                                        className="inline-flex items-center gap-1 text-violet-500 font-medium text-sm"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg shadow-violet-500/25"
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
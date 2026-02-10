"use client";

import { CERTIFICATES } from "@/lib/data/certificates";
import { Certificate } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Calendar, ExternalLink, Trophy, X } from "lucide-react";
import { useIsDark } from "@/hooks/useIsDark";
import { useState } from "react";
import Image from "next/image";

type FeaturedBadgeProps = {
    label?: string;
    className?: string;
};

function FeaturedBadge({ label = "Winner", className }: FeaturedBadgeProps) {
    return (
        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold ${className ?? ""}`}>
            <Trophy className="w-3 h-3" />
            {label}
        </div>
    );
}


export function CertificatesSection() {
    const { isDark } = useIsDark();

    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <section id="certificates" 
            className={`py-24 sm:py-20 relative overflow-hidden ${
                isDark ? 'bg-gray-950' : 'bg-gray-50'
        }`}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
                    isDark ? 'bg-amber-500/5' : 'bg-amber-200/30'
                }`} />
                <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
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
                        Achievements
                    </span>
                    <h2 className={`text-4xl sm:text-5xl font-bold mt-4 mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        Certificates &{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                            Awards
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATES.map((cert, index) => {
                        const showFeaturedBadge = Boolean(cert.featured || cert.featuredLabel);
                        const featuredLabel = cert.featuredLabel ?? "Winner";

                        return (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedCert(cert)}
                            className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                                isDark ? 'bg-gray-900' : 'bg-white shadow-lg'
                            } ${showFeaturedBadge ? 'ring-2 ring-amber-500/50' : ''}`}
                        >
                            {/* Featured Badge */}
                            {showFeaturedBadge && (
                                <FeaturedBadge label={featuredLabel} className="absolute top-4 right-4 z-10" />
                            )}

                            {/* Image */}
                            <div className="relative h-40 overflow-hidden">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-400 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${
                                    isDark 
                                        ? 'from-gray-900 via-transparent to-transparent' 
                                        : 'from-white via-transparent to-transparent'
                                }`} />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Trophy className={`w-5 h-5 ${cert.featured ? 'text-amber-500' : 'text-violet-500'}`} />
                                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {cert.date}
                                    </span>
                                </div>
                                <h3 className={`text-lg font-bold mb-2 ${
                                    isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {cert.title}
                                </h3>
                                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {cert.issuer}
                                </p>
                                <motion.span
                                    className="inline-flex items-center gap-2 text-violet-500 font-medium text-sm"
                                    whileHover={{ x: 5 }}
                                >
                                    View Details
                                    <ExternalLink className="w-4 h-4" />
                                </motion.span>
                            </div>
                        </motion.div>
                        );
                    })}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className={`relative max-w-lg w-full rounded-3xl overflow-hidden ${
                                    isDark ? 'bg-gray-900' : 'bg-white'
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedCert(null)}
                                    aria-label="Close modal"
                                    title="Close"
                                    className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                                        isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'
                                    }`}
                                >
                                    <X className="w-5 h-5 cursor-pointer" />
                                </button>

                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        sizes="(min-width: 1024px) 512px, 90vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-8">
                                    {(selectedCert.featured || selectedCert.featuredLabel) && (
                                        <FeaturedBadge
                                            label={selectedCert.featuredLabel ?? "Winner"}
                                            className="mb-4"
                                        />
                                    )}

                                    <h3 className={`text-2xl font-bold mb-4 ${
                                        isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {selectedCert.title}
                                    </h3>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Building2 className="w-5 h-5 text-violet-500" />
                                            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                                                {selectedCert.issuer}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-violet-500" />
                                            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                                                {selectedCert.date}
                                            </span>
                                        </div>
                                    </div>

                                    <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {selectedCert.description}
                                    </p>

                                    <motion.a
                                        href={selectedCert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Credential
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Raleway } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400"],
});

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about" },
    { name: "Articles", href: "/articles" },
];

const menuVariants = {
    hidden: { opacity: 0, x: "8%" },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.12 },
    },
    exit: { opacity: 0, x: "8%", transition: { duration: 0.3, ease: "easeInOut" } },
};

const linkVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const pathname = usePathname();

    // Hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 80) {
                // scrolling down
                setShowNavbar(false);
            } else {
                // scrolling up
                setShowNavbar(true);
            }
            setLastScroll(currentScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 "
            initial={{ y: 0 }}
            animate={{ y: showNavbar ? 0 : -120 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="max-w-440 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Image
                            src="/images/brandlogo.png"
                            alt="NexTrip Logo"
                            width={150}
                            height={35}
                            className="h-8 md:h-10 w-auto"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-5 py-2 font-medium transition-all duration-300 ${raleway.className} ${isActive ? "bg-white text-gray-900 rounded-full shadow-md" : "text-white hover:text-cyan-400"
                                        } group`}
                                >
                                    {link.name}
                                    {!isActive && (
                                        <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-2/3 group-hover:left-1/6" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-white hover:text-cyan-400 transition"
                            aria-label="Open menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[140px] -z-10" />

                        {/* Close Button */}
                        <div className="flex justify-end p-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:rotate-90 transition-transform duration-300"
                                aria-label="Close menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex flex-col justify-center px-10 h-full space-y-8">
                            <motion.p
                                variants={linkVariants}
                                className="text-cyan-500 font-bold uppercase tracking-[0.35em] text-xs mb-6"
                            >
                                Menu
                            </motion.p>

                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.a
                                        key={link.name}
                                        variants={linkVariants}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-baseline space-x-4 w-fit"
                                    >
                                        <span className="text-gray-500 text-sm font-mono italic">0{index + 1}</span>
                                        <span
                                            className={`relative text-4xl sm:text-5xl font-bold transition-all duration-300 ${isActive ? "text-cyan-400" : "text-white group-hover:text-cyan-400"
                                                } tracking-tight group-hover:tracking-wide`}
                                        >
                                            {link.name}
                                            <span
                                                className={`absolute left-0 -bottom-2 h-0.5 bg-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                    }`}
                                            />
                                        </span>
                                    </motion.a>
                                );
                            })}

                            {/* Bottom CTA */}
                            <motion.div variants={linkVariants} className="pt-12 border-t border-white/10 mt-10">
                                <p className="text-gray-400 text-sm mb-1">Ready for your next trip?</p>
                                <a
                                    href="mailto:book@nexttrip.com"
                                    className="text-white font-medium underline underline-offset-4 decoration-cyan-500 hover:text-cyan-400 transition"
                                >
                                    book@nexttrip.com
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

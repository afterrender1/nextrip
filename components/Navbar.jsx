"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Raleway } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Added weights for variety
});

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/all-packages" },
    { name: "Travel Guide", href: "/travel-guide" },
    { name: "Contact", href: "/contact-us" },
];

const menuVariants = {
    hidden: { opacity: 0, x: "100%" }, // Changed to 100% for cleaner slide-in
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            when: "beforeChildren",
            staggerChildren: 0.1
        },
    },
    exit: {
        opacity: 0,
        x: "100%",
        transition: { duration: 0.3, ease: "easeInOut" }
    },
};

const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const pathname = usePathname();

    // Fix 1: Scroll Lock when Menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 80) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScroll(currentScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-60 backdrop-blur-md bg-black/15 border-b border-white/10 shadow-md"
                initial={{ y: 0 }}
                animate={{ y: showNavbar ? 0 : -120 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="shrink-0 z-70">
                            <Image
                                src="/images/brandlogo.png"
                                alt="NexTrip Logo"
                                width={150}
                                height={35}
                                className="h-8 md:h-10 w-auto " // Ensures logo is visible on dark glass
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`relative px-5 py-2 font-medium transition-all duration-300 ${raleway.className} ${isActive ? "bg-white text-gray-900 rounded-full shadow-md" : "text-white hover:text-cyan-400"
                                            } group`}
                                    >
                                        {link.name}
                                        {!isActive && (
                                            <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-2/3 group-hover:left-[16.5%]" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="text-white p-2 hover:bg-white/10 rounded-full transition"
                                aria-label="Open menu"
                            >
                                <Menu size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-100 bg-[#0a0a0a] flex flex-col md:hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
                            <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />
                        </div>

                        {/* Close Button Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Navigation</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white p-2 bg-white/5 rounded-full hover:rotate-90 transition-all duration-300"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className={`flex flex-col justify-center px-8 grow space-y-6 ${raleway.className}`}>
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div key={link.name} variants={linkVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center space-x-6 w-full"
                                        >
                                            <span className="text-cyan-500/40 text-sm font-mono tracking-tighter">0{index + 1}</span>
                                            <span
                                                className={`relative text-3xl font-bold transition-all duration-300 ${isActive ? "text-cyan-400" : "text-white group-hover:text-cyan-400"
                                                    } tracking-tight`}
                                            >
                                                {link.name}
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="activeUnderline"
                                                        className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                                                    />
                                                )}
                                            </span>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile CTA */}
                            <motion.div variants={linkVariants} className="pt-10 mt-6 border-t border-white/10">
                                <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Get in touch</p>
                                <a
                                    href="mailto:book@nexttrip.com"
                                    className="text-xl text-white font-medium hover:text-cyan-400 transition-colors"
                                >
                                    book@nexttrip.com
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
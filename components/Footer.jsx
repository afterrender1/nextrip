import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#020617] text-slate-300">

            {/* Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px]" />
                <div className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[140px]" />
            </div>

            <div className={`relative max-w-7xl mx-auto px-6 py-20 ${poppins.className}`}>

                {/* Brand */}
                <div className="flex flex-col items-center mb-12">
                    <Image
                        src="/images/brandlogo.png"
                        alt="Ajwa Tours Logo"
                        width={140}
                        height={40}
                        className="object-contain"
                    />
                    <p className="mt-4 text-sm text-slate-400 text-center max-w-md">
                        Luxury travel experiences crafted for explorers who value comfort, safety, and unforgettable journeys.
                    </p>
                </div>

                {/* Grid Sections */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-14">

                    {/* Explore */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-[0.2em] text-xs">Explore</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="hover:text-cyan-400 transition">Home</Link></li>
                            <li><Link href="/tours" className="hover:text-cyan-400 transition">Tours</Link></li>
                            <li><Link href="/book-now" className="hover:text-cyan-400 transition">Book Now</Link></li>
                            <li><Link href="/about" className="hover:text-cyan-400 transition">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-[0.2em] text-xs">Support</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/faq" className="hover:text-cyan-400 transition">FAQs</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-cyan-400 transition">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-cyan-400 transition">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-[0.2em] text-xs">Contact</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-cyan-400" /> <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-cyan-400" /> <span>support@ajwatours.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-cyan-400" /> <span>New York, USA</span>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex gap-5 mt-8 justify-start md:justify-start">
                            <a href="#" className="hover:text-cyan-400 transition"><Facebook size={18} /></a>
                            <a href="#" className="hover:text-cyan-400 transition"><Instagram size={18} /></a>
                            <a href="#" className="hover:text-cyan-400 transition"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-[0.2em] text-xs">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/booking" className="hover:text-cyan-400 transition">Book Now</Link></li>
                            <li><Link href="/packages" className="hover:text-cyan-400 transition">All Tours</Link></li>
                            <li><Link href="/about" className="hover:text-cyan-400 transition">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-12" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Ajwa Tours. All rights reserved.</p>
                    <p className="tracking-widest uppercase">Travel Beyond Limits</p>
                </div>

            </div>
        </footer>
    );
}

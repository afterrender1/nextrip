import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Globe } from "lucide-react";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["500"],
    subsets: ["latin"],
});

const BookNowCTA = () => {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F8FAFC]">

            {/* Soft Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 left-1/4 w-105 h-105 bg-cyan-400/20 rounded-full blur-[140px]" />
                <div className="absolute top-1/3 right-1/4 w-105 h-105 bg-indigo-400/20 rounded-full blur-[140px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

                {/* Eyebrow */}
                <div className={`flex justify-center items-center gap-3 mb-6 ${poppins.className}`}>
                    <span className="w-10 h-0.5 bg-cyan-500" />
                    <span className="text-cyan-600 text-xs font-semibold uppercase tracking-[0.35em]">
                        Ready to Travel
                    </span>
                </div>

                {/* Heading */}
                <h2
                    className={`text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.05] ${poppins.className}`}
                >
                    Start Your Journey <br />
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-400 to-indigo-400">
                            With Confidence
                        </span>
                        <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-cyan-500/20 blur-lg" />
                    </span>
                </h2>

                {/* Description */}
                <p className="mt-8 max-w-3xl mx-auto text-slate-500 text-lg leading-relaxed">
                    Seamless bookings, curated destinations, and trusted travel experts.
                    Reserve your tour today and experience travel done right.
                </p>

                {/* CTA */}
                <div className="mt-14 flex justify-center">
                    <Link
                        href="/book-now"
                        className="
              group inline-flex items-center gap-3
              rounded-2xl
              bg-slate-900 text-white
              px-10 py-4
              text-lg font-semibold
              transition-all duration-300
              hover:bg-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30
              active:scale-95
            "
                    >
                        Book Your Tour
                        <ArrowRight
                            size={22}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* Trust Stats */}
                <div
                    className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 ${montserrat.className}`}
                >
                    <div className="flex flex-col items-center gap-3">
                        <Star className="text-cyan-500" />
                        <span className="text-xl font-bold text-slate-900">4.9 / 5</span>
                        <span className="text-sm text-slate-500">Traveler Reviews</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <ShieldCheck className="text-cyan-500" />
                        <span className="text-xl font-bold text-slate-900">Secure Booking</span>
                        <span className="text-sm text-slate-500">Protected Payments</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <Globe className="text-cyan-500" />
                        <span className="text-xl font-bold text-slate-900">50+ Destinations</span>
                        <span className="text-sm text-slate-500">Worldwide Tours</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookNowCTA;

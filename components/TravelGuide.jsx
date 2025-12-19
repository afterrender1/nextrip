import React from "react";
import { ArrowRight, PlaneTakeoff, Wallet, SunMoon, FileCheck, Car, ShieldCheck } from "lucide-react";
import { Poppins, Montserrat } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["500"], subsets: ["latin"] });

const travelSections = [
    {
        title: "Getting to the USA",
        icon: <PlaneTakeoff className="text-cyan-500" size={28} />,
        description: "Arrival via major hubs like JFK, LAX, or ORD. Direct flights connect from most global cities.",
        color: "bg-cyan-50"
    },
    {
        title: "Currency & Payments",
        icon: <Wallet className="text-emerald-500" size={28} />,
        description: "Official currency is USD. Credit cards are widely accepted; ATMs are available everywhere.",
        color: "bg-emerald-50"
    },
    {
        title: "Best Time to Visit",
        icon: <SunMoon className="text-amber-500" size={28} />,
        description: "Spring and Fall offer the best balance. Summer for National Parks; Winter for skiing.",
        color: "bg-amber-50"
    },
    {
        title: "Visa Requirements",
        icon: <FileCheck className="text-indigo-500" size={28} />,
        description: "ESTA program available for 40+ countries. Others require a B-1/B-2 visitor visa.",
        color: "bg-indigo-50"
    },
    {
        title: "Getting Around",
        icon: <Car className="text-rose-500" size={28} />,
        description: "Car rentals are best for road trips. Amtrak and domestic flights cover longer distances.",
        color: "bg-rose-50"
    },
    {
        title: "Travel Insurance",
        icon: <ShieldCheck className="text-cyan-500" size={28} />,
        description: "We strongly recommend coverage for medical emergencies and trip cancellations.",
        color: "bg-cyan-50"
    },
];

export default function TravelGuideCTA() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F8FAFC]">

            {/* Soft Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 left-1/4 w-105 h-105  bg-cyan-400/20 rounded-full blur-[140px]" />
                <div className="absolute top-1/3 right-1/4 w-105 h-105  bg-indigo-400/20 rounded-full blur-[140px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

                {/* Eyebrow */}
                <div className={`flex justify-center items-center gap-3 mb-6 ${poppins.className}`}>
                    <span className="w-10 h-0.5 bg-cyan-500" />
                    <span className="text-cyan-600 text-xs font-semibold uppercase tracking-[0.35em]">
                        Knowledge Base
                    </span>
                </div>

                {/* Heading */}
                <h2 className={`text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.05] ${poppins.className}`}>
                    Travel Guide <br />
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-400 to-indigo-400">
                            For Your Adventure
                        </span>
                        <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-cyan-500/20 blur-lg" />
                    </span>
                </h2>

                {/* Description */}
                <p className="mt-8 max-w-3xl mx-auto text-slate-500 text-lg leading-relaxed">
                    Expert insights and essential information to help you navigate your upcoming American adventure with ease.
                </p>

                {/* Travel Sections Grid */}
                <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${montserrat.className}`}>
                    {travelSections.map((section, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {section.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{section.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 flex justify-center">
                    <Link
                        href="/contact-us"
                        className="group inline-flex items-center gap-3 rounded-2xl bg-slate-900 text-white px-10 py-5 text-lg font-semibold transition-all duration-300 hover:bg-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95"
                    >
                        Contact Our Experts
                        <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}

import React from "react";
import {
    ShieldCheck,
    BadgeDollarSign,
    Headphones,
    MapPinned,
    CreditCard,
    Sparkles,
} from "lucide-react";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
});
const montserrat = Montserrat({
    weight: ["500"],
    subsets: ["latin"],
});
const features = [
    {
        icon: ShieldCheck,
        title: "Secure Booking",
        desc: "Your payments and personal data are protected with bank-level encryption.",
    },
    {
        icon: BadgeDollarSign,
        title: "Best Price Guarantee",
        desc: "Find a lower price? We'll match it and give you an extra 10% off.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        desc: "Our travel experts are available around the clock to assist you.",
    },
    {
        icon: MapPinned,
        title: "Local Expertise",
        desc: "Benefit from our deep knowledge of every destination we offer.",
    },
    {
        icon: CreditCard,
        title: "Flexible Payment",
        desc: "Pay in installments with our flexible and transparent payment plans.",
    },
    {
        icon: Sparkles,
        title: "Personalized Service",
        desc: "Every tour is tailored to your preferences and travel style.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className={`max-w-3xl mb-16 ${poppins.className}`}>
                    <div className="flex items-center gap-3">
                        <span className="w-10 h-0.5 bg-cyan-500" />
                        <span className="text-cyan-600 text-sm font-semibold uppercase tracking-[0.25em]">

                            Why Choose Us
                        </span>

                    </div>

                    <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                        Travel with{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-300 to-indigo-400">
                            Confidence
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        We're committed to making your American adventure unforgettable
                        with premium service at every step.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm  transition-all duration-500 ${montserrat.className}`}
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6  transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-cyan-600 transition-colors" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl  text-slate-900 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

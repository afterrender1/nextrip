import React from "react";
import Image from "next/image";
import { Star, Clock, Users, ArrowRight, MapPin } from "lucide-react";
import toursData from "../app/data/tour.json";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
    weight: ["400",],
    subsets: ["latin"],
});
const montserrat = Montserrat({
    weight: ["500",],
    subsets: ["latin"],
});

const Tours = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header Section */}
                <div
                    className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 ${poppins.className}`}
                >
                    {/* Left Content */}
                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-10 h-0.5 bg-cyan-500" />
                            <span className="text-cyan-600 text-xs font-semibold uppercase tracking-[0.35em]">
                                Handcrafted Travel
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.08]">
                            Curated Tours for <br />
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-300 to-indigo-400">
                                    Modern Explorers
                                </span>
                                {/* Subtle underline glow */}
                                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-cyan-500/20 blur-lg" />
                            </span>
                        </h2>
                    </div>

                    {/* Right Description */}
                    <p className="text-slate-500 lg:max-w-md text-base md:text-lg leading-relaxed">
                        Luxury, adventure, and comfort — carefully designed journeys that transform
                        travel into an unforgettable <span className="text-slate-800 font-medium">NexTrip</span> experience.
                    </p>
                </div>


                {/* Tours Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {toursData.map((tour) => (
                        <div
                            key={tour.name}
                            className={`group relative flex flex-col cursor-default bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${montserrat.className}`}
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-72 overflow-hidden">
                                <Image
                                    src={`/images/${tour.image}`}
                                    alt={tour.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                />

                                {/* Floating Badge - Rating */}
                                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/80 px-4 py-1.5 rounded-2xl flex items-center gap-1 shadow-sm">
                                    <Star size={14} className="fill-amber-400 text-amber-400" />
                                    <span className="text-sm font-bold text-slate-900">{tour.rating}</span>
                                </div>

                                {/* Floating Price Tag */}
                                <div className="absolute bottom-4 left-4 bg-transparent backdrop-blur-3xl text-white px-4 py-2 rounded-xl">
                                    <span className="text-xs opacity-70 block leading-none mb-1">From</span>
                                    <span className="text-xl font-bold">${tour.price.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col grow">
                                <div className="flex items-center gap-2 text-cyan-600 mb-3">
                                    <MapPin size={16} />
                                    <span className="text-xs font-bold uppercase tracking-widest">{tour.state}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                    {tour.name}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {tour.description}
                                </p>

                                {/* Meta Info Area */}
                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5 text-slate-600">
                                            <Clock size={16} className="text-cyan-500" />
                                            <span className="text-xs font-medium">{tour.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-slate-600">
                                            <Users size={16} className="text-cyan-500" />
                                            <span className="text-xs font-medium">{tour.groupSize}</span>
                                        </div>
                                    </div>

                                    <button
                                        className="
    cursor-pointer
    flex items-center justify-center
    w-11 h-11
    rounded-full
    bg-slate-100
    text-slate-900
    border border-slate-200
    transition-all duration-300 ease-out
    group-hover:bg-cyan-500
    group-hover:border-cyan-500
    group-hover:text-white
    hover:shadow-lg hover:shadow-cyan-500/30
    active:scale-95
  "
                                    >
                                        <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-cyan-600 shadow-xl shadow-slate-200 transition-all active:scale-95">
                        Discover All Tours
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Tours;
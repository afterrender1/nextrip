import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const destinations = [
    { name: "Grand Canyon", state: "Arizona", tours: 12, image: "/images/grand.png" },
    { name: "San Francisco", state: "California", tours: 18, image: "/images/sainfransisco.png" },
    { name: "Miami Beach", state: "Florida", tours: 15, image: "/images/miami.png" },
    { name: "Las Vegas", state: "Nevada", tours: 20, image: "/images/lasvegas.png" },
    { name: "Hawaii", state: "Hawaii", tours: 14, image: "/images/hawaii.png" },
];

const PopularDestinations = () => {
    return (
        <section className={`py-24 bg-white text-slate-900 ${poppins.className}`}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Minimalist Header */}
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 border-b border-slate-100 pb-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
                            Most Popular <span className="not-italic font-light text-slate-400">/01</span>
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg uppercase tracking-widest">Destinations to explore in USA</p>
                    </div>
                    <button className="hidden cursor-pointer md:block text-sm font-semibold uppercase tracking-widest border-b-2 border-cyan-500 pb-1 hover:text-cyan-600 transition-colors">
                        View All Destinations →
                    </button>
                </div>

                {/* Clean Flex/Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {destinations.map((dest, idx) => (
                        <div
                            key={dest.name}
                            className="group relative h-125 overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10"
                        >
                            {/* Image with subtle zoom */}
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover   transition-all duration-700 scale-105 group-hover:scale-100"
                            />

                            {/* Overlay: Initial state is very clean */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content: Minimal and centered */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {dest.state}
                                </span>
                                <h3 className="text-white text-2xl font-medium tracking-tight mb-1">
                                    {dest.name}
                                </h3>
                                <div className="h-px w-0 group-hover:w-full bg-white/30 transition-all duration-700 mb-3" />
                                <p className="text-gray-300 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                    {dest.tours} Tours Available
                                </p>
                            </div>

                            {/* Index Number Overlay */}
                            <div className="absolute top-4 left-4 text-white/20 text-4xl font-black group-hover:text-white/40 transition-colors">
                                0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Only CTA */}
                <div className="mt-10 md:hidden text-center">
                    <button className="w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
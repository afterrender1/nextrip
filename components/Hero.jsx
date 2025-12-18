import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400'],
});

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh]">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/bgimg.png"
                    alt="Dubai Skyline with Burj Khalifa"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70" />
            </div>

            {/* Hero Content - Centered Vertically, Aligned Left Horizontally */}
            <div className="relative z-10 flex min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] items-center justify-start px-6 md:px-12 lg:px-24">
                <div className={`max-w-3xl text-white ${poppins.className}`}>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Discover the <br /> Magic of <span className="font-extrabold bg-linear-to-r from-[#b22234] via-white to-[#3c3b6e] bg-clip-text text-transparent">
                            USA
                        </span>

                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-xl">
                        Luxury experiences, unforgettable adventures, and exclusive packages tailored just for you.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="cursor-pointer px-7 py-3 md:px-8 md:py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg">
                            Explore Packages
                        </button>

                        <button className="cursor-pointer px-7 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition">
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
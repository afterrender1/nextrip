"use client";

import React, { useState, useEffect } from "react";
import {
    MapPin,
    CalendarDays,
    Users,
    CreditCard,
    CheckCircle2,
    User,
    Loader2,
} from "lucide-react";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["500", "700"], subsets: ["latin"] });

const tours = [
    { id: 1, name: "Grand Canyon Adventure", price: 2499, location: "Arizona" },
    { id: 2, name: "California Coast Explorer", price: 3299, location: "California" },
    { id: 3, name: "Hawaiian Paradise Escape", price: 4999, location: "Hawaii" },
    { id: 4, name: "Miami & Florida Keys", price: 2899, location: "Florida" },
];

export default function BookingPage() {
    const [selectedTour, setSelectedTour] = useState(tours[0]);
    const [numTravelers, setNumTravelers] = useState(1);
    const [travelDate, setTravelDate] = useState("");
    const [travelerNames, setTravelerNames] = useState([""]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setTravelerNames((prev) =>
            Array.from({ length: numTravelers }, (_, i) => prev[i] || "")
        );
    }, [numTravelers]);

    const subtotal = selectedTour.price * numTravelers;
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const handleBooking = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 1500);
    };

    return (
        <section className={`py-24 bg-[#F8FAFC] ${montserrat.className}`}>
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className={`mb-16 ${poppins.className}`}>
                    <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
                        Complete Your{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-indigo-400">
                            Booking
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-slate-500 text-lg">
                        Secure your trip in minutes with instant confirmation and protected payments.
                    </p>
                </div>

                <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Destination */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-6">
                                Select Your Tour
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-4 select-none">
                                {tours.map((tour) => (
                                    <button
                                        key={tour.id}
                                        type="button"
                                        onClick={() => setSelectedTour(tour)}
                                        className={`p-5 rounded-xl border transition-all text-left cursor-pointer ${selectedTour.id === tour.id
                                                ? "border-cyan-500 bg-cyan-50"
                                                : "border-slate-100 hover:border-slate-300"
                                            }`}
                                    >
                                        <p className="font-semibold text-slate-900">{tour.name}</p>
                                        <p className="text-sm text-slate-500">
                                            ${tour.price.toLocaleString()} / person
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Trip Details */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold uppercase text-slate-600 mb-2 block">
                                    Travel Date
                                </label>
                                <div className="relative">
                                    <CalendarDays className="absolute left-3 top-3 text-cyan-500" />
                                    <input
                                        type="date"
                                        value={travelDate}
                                        onChange={(e) => setTravelDate(e.target.value)}
                                        className="w-full pl-10 py-3 rounded-lg bg-slate-50 focus:ring-2 focus:ring-cyan-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold uppercase text-slate-600 mb-2 block">
                                    Travelers
                                </label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-3 text-cyan-500" />
                                    <input
                                        type="number"
                                        min={1}
                                        value={numTravelers}
                                        onChange={(e) => setNumTravelers(+e.target.value || 1)}
                                        className="w-full pl-10 py-3 rounded-lg bg-slate-50 focus:ring-2 focus:ring-cyan-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Traveler Names */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-6">
                                Traveler Details
                            </h3>

                            <div className="space-y-4">
                                {travelerNames.map((name, i) => (
                                    <div key={i} className="relative">
                                        <User className="absolute left-3 top-3 text-slate-400" />
                                        <input
                                            value={name}
                                            onChange={(e) => {
                                                const arr = [...travelerNames];
                                                arr[i] = e.target.value;
                                                setTravelerNames(arr);
                                            }}
                                            placeholder={`Traveler ${i + 1} Full Name`}
                                            className="w-full pl-10 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SUMMARY */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg sticky top-24 h-fit">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">
                            Booking Summary
                        </h3>

                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-slate-500">Tour</span>
                                <span className="font-medium">{selectedTour.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Travelers</span>
                                <span>{numTravelers}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Subtotal</span>
                                <span>${subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Taxes</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>

                            <div className="pt-4 border-t flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span className="text-cyan-600">${total.toLocaleString()}</span>
                            </div>
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="mt-8 w-full py-4 rounded-xl cursor-pointer bg-slate-900 text-white hover:bg-cyan-500 transition-all flex justify-center gap-2 font-semibold"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} /> Processing
                                </>
                            ) : (
                                <>
                                    <CreditCard size={18} /> Confirm & Pay
                                </>
                            )}
                        </button>

                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                            <CheckCircle2 size={14} className="text-green-500" />
                            Secure & Encrypted Checkout
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

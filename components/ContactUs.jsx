"use client"

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["500", "700"], subsets: ["latin"] });

const ContactUs = () => {
    // 1. Manage form state to make it functional
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const INITIAL_STATE = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("form submittled successfully ")
        setFormData(
            INITIAL_STATE
        )
    }


    return (
        <section className="py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className={`mb-20 ${poppins.className}`}>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="w-10 h-0.5 bg-cyan-500" />
                        <span className="text-cyan-600 text-xs font-semibold uppercase tracking-[0.35em]">
                            Get in Touch
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.1]">
                        Let’s Plan Your <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-300 to-indigo-400">
                                Next Journey
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-cyan-500/20 blur-lg" />
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Info Card */}
                    <div className={`bg-white rounded-xl p-8 shadow-sm border border-slate-100 ${montserrat.className}`}>
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                        <div className="space-y-6">
                            <ContactDetail icon={<MapPin />} title="Office Address" detail="nextTrip, New York, USA" />
                            <ContactDetail icon={<Phone />} title="Phone" detail="+1 234 45454354" />
                            <ContactDetail icon={<Mail />} title="Email" detail="support@nextTrip.com" />
                            <ContactDetail icon={<Clock />} title="Working Hours" detail="Mon – Sat: 9:00 AM – 8:00 PM" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`lg:col-span-2 bg-white rounded-xl p-8 shadow-sm border border-slate-100 ${montserrat.className}`}>
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                            <InputField name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                            <InputField name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                            <InputField name="phone" type="text" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="md:col-span-2" />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 md:col-span-2"
                            />

                            <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white hover:bg-cyan-500 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-95">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper Components for Cleaner Code
const ContactDetail = ({ icon, title, detail }) => (
    <div className="flex items-start gap-4">
        <div className="text-cyan-500 mt-1">{icon}</div>
        <div>
            <p className="font-semibold text-slate-900">{title}</p>
            <p className="text-slate-500 text-sm">{detail}</p>
        </div>
    </div>
);

const InputField = ({ name, type, placeholder, value, onChange, className = "" }) => (
    <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${className}`}
    />
);

export default ContactUs;
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Palette, Briefcase, Smartphone, GraduationCap, BookOpen, Lightbulb, Video, BarChart2, LineChart, Printer, Brush, ImageDown } from "lucide-react";

const services = [
  {
    title: "Brand Experience",
    subtitle: "Creating memorable identities that resonate",
    features: [
      { icon: <Palette className="w-6 h-6 text-" />, title: "Visual Identity", desc: "Logos, colors & typography" },
      { icon: <Briefcase className="w-6 h-6 text-primary" />, title: "Brand Strategy", desc: "Positioning & storytelling" },
      { icon: <Smartphone className="w-6 h-6 text-primary" />, title: "Digital Presence", desc: "Website & social media design" },
    ],
    stats: { rating: "4.9/5", label: "Client Rating", projects: "50+", label2: "Projects" },
  },
  {
    title: "Training & Consultancy",
    subtitle: "Empowering brands through knowledge and guidance",
    features: [
      { icon: <GraduationCap className="w-6 h-6 text-primary" />, title: "Workshops", desc: "Hands-on branding sessions" },
      { icon: <BookOpen className="w-6 h-6 text-primary" />, title: "Consultancy", desc: "Tailored brand growth strategies" },
      { icon: <Lightbulb className="w-6 h-6 text-primary" />, title: "Skill Development", desc: "Creative and marketing training" },
    ],
    stats: { rating: "5.0/5", label: "Feedback Score", projects: "10+", label2: "Brands Trained" },
  },
  {
    title: "Media Management",
    subtitle: "Building engagement through compelling content",
    features: [
      { icon: <Video className="w-6 h-6 text-primary" />, title: "Content Creation", desc: "Photo & video production" },
      { icon: <BarChart2 className="w-6 h-6 text-primary" />, title: "Campaign Strategy", desc: "Targeted ad management" },
      { icon: <LineChart className="w-6 h-6 text-primary" />, title: "Analytics", desc: "Performance insights & optimization" },
    ],
    stats: { rating: "4.8/5", label: "Audience Growth", projects: "30+", label2: "Campaigns" },
  },
  {
    title: "Printing & Artistry",
    subtitle: "Bringing creativity to life through design and production",
    features: [
      { icon: <Printer className="w-6 h-6 text-primary" />, title: "Digital & Offset Printing", desc: "High-quality prints for all materials" },
      { icon: <Brush className="w-6 h-6 text-primary" />, title: "Custom Art & Illustration", desc: "Unique artwork tailored to your brand" },
      { icon: <ImageDown className="w-6 h-6 text-primary" />, title: "Merch & Branding Items", desc: "T-shirts, flyers, banners, and more" },
    ],
    stats: { rating: "4.9/5", label: "Quality Rating", projects: "10+", label2: "Print Jobs Completed" },
  },
];



export default function ServicesCarousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
    //   const prevSlide = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

    const current = services[index];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return (
        <div className="relative w-full max-w-5xl mx-auto bg-white rounded-2xl p-5 md:p-8">
            {/* Carousel Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >

                    <div className="bg-gradient-to-br from-red-600 to-[#dd1e26] p-4 sm:p-8 text-white mb-8 rounded-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold text-[#dd1e26]"><Image src="/logo/img (5).jpg" alt="logo" width={50} height={50} className='rounded-3xl' /></span>
                            </div>
                            {/* Carousel Indicators */}
                            <div className="flex justify-center mt-6 gap-2">
                                {services.map((_, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${i === index ? "bg-white" : "bg-white/30"
                                            }`}
                                    ></div>
                                ))}
                            </div>

                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-start">{current.title}</h3>
                        <p className="text-white/80 text-sm text-start">{current.subtitle}</p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {current.features.map((f, i) => (
                            <div key={i} className="rounded-xl p-6 hover:shadow-md transition bg-[#fefbf6] shadow-md">
                                <div className="mb-3 flex items-center justify-center text-gray-800">{f.icon}</div>
                                <h3 className="font-semibold text-gray-800">{f.title}</h3>
                                <p className="text-sm text-gray-500">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-12 text-gray-700">
                        <div>
                            <h4 className="text-2xl font-bold">{current.stats.rating}</h4>
                            <p className="text-sm">{current.stats.label}</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold">{current.stats.projects}</h4>
                            <p className="text-sm">{current.stats.label2}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

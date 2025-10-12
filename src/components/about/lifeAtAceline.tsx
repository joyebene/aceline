"use client";

import Image from 'next/image'
import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";

const LifeAtAceline = () => {

     const images = [
        "/comp-img/img2 (6).jpg",
        "/comp-img/img2 (7).jpg",
        "/comp-img/img2 (10).jpg",
        "/comp-img/img2 (7).jpg",
        "/comp-img/img2 (1).jpg",
        "/comp-img/img2 (3).jpg",
        "/comp-img/img2 (11).jpg",
      ];
      
    
      const [index, setIndex] = useState(0);
    
       useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
      }, [images.length]);

  return (
   <section className="py-20 bg-[#fefbf6] pt-10 sm:pt-15 md:pt-20 pb-20 mb:pb-40 px-4 md:px-20">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Life at <span className="text-red-600">Aceline</span></h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        We’re more than designers — we’re dreamers, builders, and thinkers united by passion for storytelling. 
        At Aceline, creativity thrives in collaboration. Every project is a team effort where ideas spark innovation.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li>💡 Weekly creative brainstorming sessions</li>
        <li>🎨 Collaborative design sprints</li>
        <li>🌍 Work-life balance & community impact</li>
      </ul>
    </div>

     {/* Image Side */}
      <div className="relative">
         <div className="relative rounded-xl rounded-bl-[60px] rounded-tr-[60px] overflow-hidden shadow-lg shadow-gray-400 h-[400px] md:h-[450px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Company image ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
  </div>
</section>
  )
}

export default LifeAtAceline;
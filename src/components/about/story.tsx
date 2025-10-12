"use client";

import Image from 'next/image'
import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Story = () => {

 const images = [
    "/comp-img/img (4).jpg",
    "/comp-img/img (6).jpg",
    "/comp-img/img (5).jpg",
    "/comp-img/img (7).jpg",
    "/comp-img/img (1).jpg",
    "/comp-img/img (3).jpg",
    "/comp-img/img (1).jpg",
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
  <div className="">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text Side */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            At Aceline, we believe every brand deserves a visual identity that tells its story.
            Since 2019, we&apos;ve transformed ideas into powerful brands trusted across industries.
          </p>
          <p>
            From creative design to strategic development, our mission is to help companies
            express their vision with clarity and purpose.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-xl rounded-b-4xl p-6 shadow">
            <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
            <div className="text-sm text-gray-600">Years of Excellence</div>
          </div>
          <div className="bg-white rounded-xl rounded-b-4xl p-6 shadow">
            <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Brands Built</div>
          </div>
        </div>
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
  </div>
</section>
  )
}

export default Story
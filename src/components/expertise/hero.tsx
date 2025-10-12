import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <section className="pt-10 sm:pt-15 md:pt-20 pb-20 px-4  md:py-20 md:px-20 bg-gradient-to-tl bg-[#fefbf6]">
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='w-full md:w-1/2 '>
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#dd1e26] rounded-full"></div>
            <span className="text-sm font-medium text-[#dd1e26]">Our Expertise</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1b1e] mb-6 leading-tight">
            Services that<br />
            transform<br />
            <span className="text-[#dd1e26]">businesses</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            From strategic branding to digital execution, we offer comprehensive services designed to elevate your brand and drive measurable results.
          </p> 
            </div>

            <div className='w-1/2 relative rounded-3xl hidden md:block'>
                <Image src="/exp-img/bus2.png" fill alt='img' className='rounded-3xl' />
            </div>
        
        </div>
      </section>
  )
}

export default Hero
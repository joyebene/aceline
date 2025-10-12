import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[url('/exp-img/bus.jpeg')] bg-no-repeat bg-cover w-full">
        <div className="w-full inset-0 bg-[#fefbf6] opacity-95 pt-10 sm:pt-15 md:pt-20 pb-20 px-4 md:px-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <span className="text-sm font-medium text-red-700">About Aceline</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            We build brands<br />
            that inspire<br />
            <span className="text-red-600">confidence</span>
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            Aceline is an award-winning branding agency dedicated to transforming businesses through strategic branding, creative excellence, and data-driven insights that drive measurable growth.
          </p>
          </div>
          
        </div>
      </section>
  )
}

export default Hero
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#fefbf6]">
        <div className="pt-10 sm:pt-15 md:pt-20 pb-20 px-4 md:px-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#dd1e26] rounded-full"></div>
            <span className="text-sm font-medium text-[#dd1e26]">Our Portfolio</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Brands we&apos;ve
            transformed<br />
            <span className="text-[#dd1e26]">with purpose</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Explore our portfolio of successful brand transformations across industries. Each project represents our commitment to strategic creativity and measurable results.
          </p>
        </div>
      </section>
  )
}

export default Hero;
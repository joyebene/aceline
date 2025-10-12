import React from 'react'

const Hero = () => {
  return (
     <section className="bg-[url('/cont/cont.webp')] bg-cover bg-center bg-no-repeat">
        <div className='inset-0 pt-10 sm:pt-15 md:pt-20 pb-20 px-4 md:px-20 bg-[#fefbf6] opacity-80'>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#dd1e26] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#dd1e26]">Let&apos;s Talk</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start your<br />
            brand journey<br />
            <span className="text-[#dd1e26]">with us</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Ready to transform your brand? Get in touch with our team and let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>
  )
}

export default Hero;
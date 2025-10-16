import React from 'react'
import Button from '../shared/button';

const Cta = () => {
  return (
      <section className="pt-10 sm:pt-15 md:pt-20 pb-20 px-6 bg-gradient-to-r from-[#e82933] to-[#dd1e26]">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how our expertise can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="Book a Consultation" link='/contact' className='border-2 border-white' />
          </div>
        </div>
      </section>
  )
}

export default Cta;
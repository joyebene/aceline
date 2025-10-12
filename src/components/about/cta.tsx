import React from 'react'
import Button from '../shared/button'
import Link from 'next/link'

const Cta = () => {
  return (
     <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos; create something extraordinary together. Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text='Get Started' link="/contact" />
            <Link href="/work" className="px-10 py-4 border-2 border-gray-300 text-gray-900 rounded-md font-semibold hover:border-red-600 hover:text-red-600 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Cta
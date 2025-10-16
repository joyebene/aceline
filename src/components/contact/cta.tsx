import React from 'react'

const Cta = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-red-600 to-red-700">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Can&apos;t wait to get started?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Book a free 30-minute consultation call with our team today.
        </p>
        <a
          href="https://wa.me/+2349136566319?text=Hello!%20I%20would%20like%20to%20schedule%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white text-red-600 rounded-lg font-bold hover:shadow-2xl transition-all inline-flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Schedule Free Consultation
        </a>

      </div>
    </section>
  )
}

export default Cta;
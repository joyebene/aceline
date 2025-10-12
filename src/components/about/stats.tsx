import React from 'react'

const Stats = () => {
  return (
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Brands Built' },
              { number: '5+', label: 'Years Experience' },
              { number: '90%', label: 'Client Satisfaction' },
              { number: '10+', label: 'Team Members' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#fefbf6] rounded-2xl p-8">
                <div className="text-5xl font-bold mb-2 text-[#1a1b1e]">{stat.number}</div>
                <div className="text-[#1a1b1e]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Stats
import React from 'react'

const IndusWeServe = () => {
  return (
    <section className="pt-10 sm:pt-15 md:pt-20 pb-20 md:pb-40 px-6 bg-gray-50 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We <span className="text-red-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600">Expertise across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { name: 'Technology', icon: '💻' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Finance', icon: '💰' },
              { name: 'Education', icon: '📚' },
              { name: 'Retail', icon: '🛍️' },
              { name: 'Food & Beverage', icon: '🍽️' },
              { name: 'Real Estate', icon: '🏢' },
              { name: 'Fashion', icon: '👗' }
            ].map((industry, i) => (
              <div key={i} className="bg-white shadow-md shadow-[#ee4850] rounded-xl p-6 text-center hover:shadow-lg transition-all group cursor-pointer">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <div className="font-semibold text-gray-900">{industry.name}</div>
              </div>
            ))}
          </div>
      </section>
  )
}

export default IndusWeServe;
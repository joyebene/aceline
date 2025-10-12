import React from 'react'

const WhyChooseUs = () => {
  return (
      <section className=" bg-white">
        <div className="pt-10 sm:pt-15 md:pt-40 pb-20 md:pb-40 px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Aceline</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Award-Winning', desc: 'Recognized for excellence in branding' },
              { icon: '👥', title: 'Expert Team', desc: '10+ specialists in brand strategy' },
              { icon: '📊', title: 'Data-Driven', desc: 'Results backed by analytics' },
              { icon: '💼', title: 'Proven Track Record', desc: '50+ successful projects' }
            ].map((reason, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl mx-auto flex items-center justify-center mb-4 text-4xl">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs;
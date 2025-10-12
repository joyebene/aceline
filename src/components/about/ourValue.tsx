import React from 'react'

const OurValue = () => {
  return (
     <section className="py-20 px-6 bg-white pt-10 sm:pt-15 md:pt-20 pb-20 mb:pb-40 md:px-20">
        <div className='py-10'>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                desc: 'We pursue excellence in every project, delivering work that exceeds expectations.'
              },
              {
                icon: '💡',
                title: 'Innovation',
                desc: 'We embrace creativity and innovation, pushing boundaries to create unique solutions.'
              },
              {
                icon: '🤝',
                title: 'Partnership',
                desc: 'We work as true partners, collaborating closely with our clients for success.'
              },
              {
                icon: '📊',
                title: 'Results',
                desc: 'We focus on measurable results, ensuring our work drives real business growth.'
              }
            ].map((value, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-4xl">{value.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OurValue;
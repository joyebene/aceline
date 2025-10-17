import React from 'react'

const ContactMethod = () => {
  return (
    <section className="pt-10 sm:pt-15 md:pt-40 pb-20 md:pb-40 px-4 md:px-20 bg-white">
        <div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                ),
                title: 'Call Us',
                detail: '+234 913 656 6319',
                description: 'Mon-Fri 9am-6pm WAT',
                action: 'Call Now',
                href: 'tel:+2349136566319'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                ),
                title: 'Email Us',
                detail: 'acelineintl@gmail.com',
                description: 'We reply within 24 hours',
                action: 'Send Email',
                href: 'mailto:acelineintl@gmail.com'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Visit Us',
                detail: 'Novare Central Wuse Zone 5, Abuja, Nigeria',
                description: 'Schedule an appointment',
                action: 'Get Directions',
                href: '#map'
              }
            ].map((method, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl p-8 hover:bg-[#fefbf6] shadow-md shadow-gray-300 hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#dd1e26] group-hover:bg-red-600 group-hover:text-white transition-all">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-900 font-semibold mb-1">{method.detail}</p>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <a 
                  href={method.href}
                  className="inline-block px-6 py-2 bg-[#dd1e26] text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ContactMethod;
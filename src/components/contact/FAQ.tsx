import React from 'react'

const FAQ = () => {
  return (
    <section className="pt-10 sm:pt-15 md:pt-40 pb-20 md:pb-40 px-4 md:px-20">
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked <span className="text-[#dd1e26]">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'How long does a typical branding project take?',
                answer: 'Most branding projects take 6-12 weeks, depending on scope and complexity. We work closely with you throughout the process.'
              },
              {
                question: 'What information do you need to get started?',
                answer: 'We\'ll need details about your business, target audience, competitors, and goals. We\'ll guide you through our discovery process.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Absolutely! While we\'re based in Lagos, we work with clients globally through virtual meetings and digital collaboration tools.'
              },
              {
                question: 'What are your payment terms?',
                answer: 'We typically work with a 50% deposit upfront and 50% upon completion. Custom payment plans are available for larger projects.'
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl p-6 hover:bg-white shadow-sm hover:shadow-md transition-all">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQ;
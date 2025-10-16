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
              question: 'How do you ensure the brand reflects our vision?',
              answer: 'We begin with an in-depth discovery session to understand your values, audience, and goals. Every concept is aligned with your unique story and refined through feedback.'
            },
            {
              question: 'Can you refresh an existing brand instead of starting from scratch?',
              answer: 'Yes, we specialize in both full rebrands and brand refreshes. We’ll evaluate your current brand and identify what to retain, refine, or rebuild.'
            },
            {
              question: 'How many design concepts and revisions do you provide?',
              answer: 'We typically present 2–3 initial concepts and include up to 3 rounds of revisions to ensure the final result perfectly matches your expectations.'
            },
            {
              question: 'Do I own the final logo and design files?',
              answer: 'Yes, once the project is complete and final payment is made, you receive full ownership and all editable design files for future use.'
            },
            {
              question: 'What if I need help implementing the new brand?',
              answer: 'We offer brand rollout support — from social media templates to print materials and website updates — to ensure a consistent launch across all channels.'
            },
            {
              question: 'Can you handle printing and production as part of the project?',
              answer: 'Definitely. We offer full printing and artistry services, including business cards, brochures, signage, and branded merchandise to bring your brand to life.'
            },
            {
              question: 'How do we communicate during the project?',
              answer: 'We maintain clear communication through scheduled meetings, email updates, and dedicated project channels for feedback and progress tracking.'
            },
            {
              question: 'Do you provide ongoing brand management or consultation?',
              answer: 'Yes, we can provide retainer-based brand management or periodic consultation to help you maintain and grow your brand effectively over time.'
            },
            {
              question: 'Can you work with our in-house design or marketing team?',
              answer: 'Absolutely. We often collaborate with internal teams to ensure brand consistency and knowledge transfer for smoother long-term management.'
            },
            {
              question: 'What makes your branding approach unique?',
              answer: 'We combine strategic insight, creative excellence, and measurable impact — ensuring your brand doesn’t just look good, but drives business growth.'
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
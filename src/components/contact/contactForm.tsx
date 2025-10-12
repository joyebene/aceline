"use client";

import { Timer } from 'lucide-react';
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { BiBriefcase, BiTrophy } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';


const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    consent: false
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    budget: string;
    message: string;
    consent: boolean;
  }

  // ✅ handle input change
  const handleInputChange =
    (field: keyof FormData) =>
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
        setFormData((prev) => ({ ...prev, [field]: value }));
      };

  // ✅ handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({
      type: 'success',
      message: "Thank you! We'll get back to you within 24 hours.",
    });

    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        consent: false,
      });
    }, 5000);
  };

  return (
    <section className="pt-10 sm:pt-15 md:pt-40 pb-20 md:pb-40 px-4 md:px-20">
      <div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you soon.</p>

            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-xl ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                {formStatus.message}
              </div>
            )}

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#dd1e26] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#dd1e26] transition-all"
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange('company')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Service & Budget */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor='service' className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id='service'
                    value={formData.service}
                    onChange={handleInputChange('service')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-all appearance-none bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="training">Training & Consultancy</option>
                    <option value="media">Media Management</option>
                    <option value="all">All Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='budget' className="block text-sm font-semibold text-gray-900 mb-2">
                    Budget Range
                  </label>
                  <select
                    id='budget'
                    value={formData.budget}
                    onChange={handleInputChange('budget')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-all appearance-none bg-white"
                  >
                    <option value="">Select budget</option>
                    <option value="<5h">Less than $500</option>
                    <option value="5h-1k">$500 - $1,000</option>
                    <option value="1k-10k">$1,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#dd1e26] transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleInputChange('consent')}
                  className="w-5 h-5 text-[#dd1e26] border-gray-300 rounded focus:ring-[#dd1e26] mt-0.5"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to receive communications from Aceline and understand my data will be processed according to the Privacy Policy.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type='button'
                disabled={!formData.consent}
                className="w-full py-4 bg-gradient-to-r from-[#dd1e26] to-red-700 text-white rounded-lg font-bold hover:shadow-xl hover:shadow-red-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-white/80">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
              <div className="space-y-4">
                {[
                  { icon: <BiTrophy />, text: 'Award-winning team' },
                  { icon: <Timer />, text: '24-hour response time' },
                  { icon: <BiBriefcase />, text: '50+ successful projects' },
                  { icon: '🎯', text: 'Results-driven approach' }
                ].map((reason, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl">{reason.icon}</span>
                    <span className="text-lg">{reason.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'LinkedIn', icon: <BsLinkedin />, color: 'from-blue-600 to-blue-700' },
                  { name: 'Twitter', icon: <BsTwitterX />, color: 'from-sky-500 to-black' },
                  { name: 'Instagram', icon: <BsInstagram />, color: 'from-pink-500 to-purple-600' },
                  { name: 'Facebook', icon: <BsFacebook />, color: 'from-blue-500 to-indigo-600' }
                ].map((social, i) => (
                  <button key={i} className={`p-4 bg-gradient-to-br ${social.color} rounded-xl text-white font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2`}>
                    <span className="text-2xl">{social.icon}</span>
                    <span>{social.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;
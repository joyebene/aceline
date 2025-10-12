"use client";

import React from 'react';
import ServicesCarousel from './serviceCarousel';
import Button from '../shared/button';


const Hero = () => {

  return (
    <div className="min-h-screen bg-[#fefbf6] w-full">
      <section className="pt-10 sm:pt-15 md:pt-20 pb-20 px-4 md:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
            {/* Left Content */}
            <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-3">
                <div className="w-2 h-2 bg-[#dd1e26] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#dd1e26]">Award-winning branding agency</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building brands<br />
                that inspire<br />
                <span className="text-[#dd1e26]">confidence</span>
              </h1>  
                </div>
              

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We transform businesses through strategic branding, creative excellence, and data-driven insights that drive measurable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button text='Get Started' link='/contact' />
                <button type='button' className="px-4 md:px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-[#dd1e26] hover:text-[#dd1e26] transition-all duration-300">
                  View Our Work
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Brands Built</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">90%</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gray-400 rounded-full blur-3xl opacity-60 hidden md:block"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-400 rounded-full blur-3xl opacity-60 hidden md:block"></div>

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-md">
                {/* Service Carousel */}
                <ServicesCarousel />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Trusted Partner</div>
                  <div className="text-sm text-gray-600">500+ Brands</div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted by leading brands</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['TechCorp', 'GreenEarth', 'FoodieHub', 'HealthPlus', 'StyleCo', 'EduMaster'].map((brand, i) => (
              <div key={i} className="text-2xl font-bold text-gray-900">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
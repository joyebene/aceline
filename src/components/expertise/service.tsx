"use client";

import { BookOpen, GraduationCap, Palette, Video } from 'lucide-react';
import React, { JSX, useState } from 'react'


// 1️⃣ Define types
interface ProcessStep {
  step: string;
  desc: string;
}

interface Offering {
  name: string;
  desc: string;
}

interface Service {
  title: string;
  icon: JSX.Element;
  tagline: string;
  description: string;
  offerings: Offering[];
  process: ProcessStep[];
}


type ServiceKey = 'branding' | 'training' | 'media';


const Service = () => {
    const [activeService, setActiveService] = useState<ServiceKey>('branding');



    const services: Record<ServiceKey, Service> = {
        branding: {
            title: 'Branding Experience',
            icon: <Palette className="w-6 h-6" />,
            tagline: 'Creating memorable identities that resonate',
            description: 'We craft distinctive brand identities that capture your essence and connect with your audience on an emotional level.',
            offerings: [
                { name: 'Brand Strategy', desc: 'Positioning, messaging, and competitive analysis' },
                { name: 'Logo Design', desc: 'Unique visual marks that represent your brand' },
                { name: 'Visual Identity', desc: 'Color palettes, typography, and design systems' },
                { name: 'Brand Guidelines', desc: 'Comprehensive style guides for consistency' },
                { name: 'Brand Naming', desc: 'Memorable names that capture your essence' },
                { name: 'Brand Architecture', desc: 'Organizing multi-brand portfolios' }
            ],
            process: [
                { step: 'Discovery', desc: 'Understanding your business, audience, and goals' },
                { step: 'Strategy', desc: 'Developing positioning and messaging framework' },
                { step: 'Design', desc: 'Creating visual identity and brand elements' },
                { step: 'Delivery', desc: 'Implementing guidelines and brand assets' }
            ]
        },
        training: {
            title: 'Training & Consultancy',
            icon: <GraduationCap className="w-6 h-6 text-primary" />,
            tagline: 'Empowering teams with brand expertise',
            description: 'We equip your team with the knowledge and tools to become brand champions and drive consistent brand execution.',
            offerings: [
                { name: 'Corporate Workshops', desc: 'Interactive brand training for teams' },
                { name: 'Brand Coaching', desc: 'One-on-one sessions with brand experts' },
                { name: 'Strategy Sessions', desc: 'Deep-dive strategic planning workshops' },
                { name: 'Brand Audits', desc: 'Comprehensive assessment of brand health' },
                { name: 'Leadership Training', desc: 'Executive-level brand leadership programs' },
                { name: 'Implementation Support', desc: 'Ongoing guidance for brand rollout' }
            ],
            process: [
                { step: 'Assessment', desc: 'Evaluating current brand knowledge and gaps' },
                { step: 'Curriculum', desc: 'Designing customized training programs' },
                { step: 'Delivery', desc: 'Interactive workshops and coaching sessions' },
                { step: 'Follow-up', desc: 'Ongoing support and reinforcement' }
            ]
        },
        media: {
            title: 'Media Management',
            icon: <Video className="w-6 h-6 text-primary" />,
            tagline: 'Amplifying your brand voice',
            description: 'We manage your digital presence across all platforms, ensuring consistent messaging and maximum engagement.',
            offerings: [
                { name: 'Social Strategy', desc: 'Platform-specific content strategies' },
                { name: 'Content Creation', desc: 'Engaging posts, videos, and graphics' },
                { name: 'PR Campaigns', desc: 'Media relations and press outreach' },
                { name: 'Analytics & Reporting', desc: 'Data-driven insights and optimization' },
                { name: 'Community Management', desc: 'Engagement and reputation monitoring' },
                { name: 'Influencer Partnerships', desc: 'Strategic collaborations and campaigns' }
            ],
            process: [
                { step: 'Audit', desc: 'Analyzing current digital presence and performance' },
                { step: 'Strategy', desc: 'Developing content calendar and campaign plans' },
                { step: 'Creation', desc: 'Producing high-quality content assets' },
                { step: 'Management', desc: 'Publishing, monitoring, and optimizing' }
            ]
        }
    };

    const currentService = services[activeService];

    return (
        <div className='pt-10 sm:pt-15 md:pt-20 pb-20 mb:pb-40 px-4 md:px-20'>
            <section className="py-8 md:py-10 px-4 sm:px-6 bg-white sticky top-20 z-40 shadow-sm rounded-2xl">
                <div className="">
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {Object.entries(services).map(([key, service]) => (
                            <button
                                key={key}
                                onClick={() => setActiveService(key as ServiceKey)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${activeService === key
                                    ? 'bg-[#dd1e26] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="text-2xl">{service.icon}</span>
                                <span>{service.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Active Service Details */}
            <section className="py-10 sm:py-15 md:py-20">
                    {/* Service Header */}
                    <div className="text-center mb-16">
                        <div className="mb-4 flex justify-center">{currentService.icon}</div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentService.title}</h2>
                        <p className="text-2xl text-[#dd1e26] font-semibold mb-6">{currentService.tagline}</p>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{currentService.description}</p>
                    </div>

                    {/* What We Offer */}
                    <div className="my-20 md:my-40 bg-[#fefbf6]">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-15">
                            {currentService.offerings.map((offering, i) => (
                                <div key={i} className="bg-white rounded-md rounded-b-4xl p-6 shadow-lg hover:shadow-xl transition-all group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#dd1e26] transition-colors">
                                            <svg className="w-6 h-6 text-[#dd1e26] group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">{offering.name}</h4>
                                            <p className="text-gray-600 text-sm">{offering.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white mt-20 md:mt-40">
                        <h3 className="text-3xl font-bold mb-8 text-center">Our Process</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            {currentService.process.map((phase, i) => (
                                <div key={i} className="relative">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                            {i + 1}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">{phase.step}</h4>
                                        <p className="text-white/80 text-sm">{phase.desc}</p>
                                    </div>
                                    {i < currentService.process.length - 1 && (
                                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/20 -translate-x-1/2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
            </section>

            {/* All Services Overview */}
            <section className="py-20 px-6 bg-[#fefbf6]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Complete <span className="text-[#dd1e26]">Brand Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600">Everything you need to build a powerful brand</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Palette className='w-10 h-10 text-[#dd1e26] bg-[#fefbf6]' />,
                                title: 'Branding Experience',
                                features: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
                                color: 'from-red-500 to-pink-500'
                            },
                            {
                                icon: <BookOpen className='w-10 h-10 text-[#dd1e26] bg-[#fefbf6]' /> ,
                                title: 'Training & Consultancy',
                                features: ['Corporate Workshops', 'Brand Coaching', 'Strategy Sessions', 'Brand Audits'],
                                color: 'from-orange-500 to-red-500'
                            },
                            {
                                icon: <Video className='w-10 h-10 text-[#dd1e26] bg-[#fefbf6]' /> ,
                                title: 'Media Management',
                                features: ['Social Strategy', 'Content Creation', 'PR Campaigns', 'Analytics'],
                                color: 'from-red-600 to-red-700'
                            }
                        ].map((service, i) => (
                            <div key={i} className="group relative shadow-md rounded-md shadow-gray-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`}></div>
                                <div className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all h-full">
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-700">
                                                <span className="text-[#dd1e26]">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => setActiveService(i === 0 ? 'branding' : i === 1 ? 'training' : 'media')}
                                        className="mt-6 text-[#dd1e26] font-semibold hover:gap-2 flex items-center gap-1 transition-all"
                                    >
                                        Learn More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
            </section>
        </div>

    )
}

export default Service
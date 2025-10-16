"use client";

import React, { useState } from 'react'

const MapDirection = () => {
    const [showMap, setShowMap] = useState(false);
    return (
        <section className="pt-10 sm:pt-15 md:pt-40 pb-20 md:pb-40 px-4 md:px-20 bg-white" id='map'>
            <div>
                <div className={`bg-gray-200 rounded-3xl overflow-hidden shadow-xl relative ${!showMap && 'h-96'}`}>

                    {showMap ?   (
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9938445443186!2d7.455177074833345!3d9.064324190998434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b603800c1ff%3A0x34617630d7542f24!2sNovare%20Central!5e0!3m2!1sen!2sng!4v1760607774980!5m2!1sen!2sng" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full md:h-[500px]' 
                       title="Aceline Office Location on Google Maps"></iframe>
                    ) :  (
                       <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl mb-4">📍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us in Abuja</h3>
                            <p className="text-gray-600">Novare Central Wuse Zone 5, Abuja, Nigeria</p>
                            <button className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all" onClick={() => setShowMap(true)}>
                                Get Directions
                            </button>
                        </div>
                    </div>  
                    )}

                </div>
            </div>
        </section>
    )
}

export default MapDirection;
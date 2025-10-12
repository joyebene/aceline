"use client";

import ContactForm from '@/components/contact/contactForm';
import ContactMethod from '@/components/contact/contactMethod';
import Cta from '@/components/contact/cta';
import FAQ from '@/components/contact/FAQ';
import Hero from '@/components/contact/hero';
import MapDirection from '@/components/contact/mapDirection';
import React from 'react';

const AcelineContactPage = () => {
 

  return (
    <main className="pt-15 md:pt-20 bg-[#fefbf6]">
      <Hero />
      <ContactMethod />
      <ContactForm />
      <MapDirection />
      <FAQ />
      <Cta />
    </main>
  );
};

export default AcelineContactPage;
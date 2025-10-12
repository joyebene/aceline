import Cta from '@/components/expertise/cta';
import Hero from '@/components/expertise/hero';
import IndusWeServe from '@/components/expertise/indusWeServe';
import Service from '@/components/expertise/service';
import WhyChooseUs from '@/components/expertise/whyChooseUs';
import React from 'react';

const AcelineExpertisePage = () => {




  return (
    <main className="pt-15 md:pt-20 bg-[#fefbf6]">
      {/* Hero Section */}
      <Hero />

      {/* Service Tabs */}
      <Service />

      {/* Industries We Serve */}
      <IndusWeServe />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Section */}
      <Cta />
    </main>
  );
};

export default AcelineExpertisePage;
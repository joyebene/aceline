import Hero from '@/components/about/hero';
import MissionAndVision from '@/components/about/missionAndVision';
import Story from '@/components/about/story';
import OurValue from '@/components/about/ourValue';
import React from 'react';
import LifeAtAceline from '@/components/about/lifeAtAceline';
import Cta from '@/components/about/cta';
import Stats from '@/components/about/stats';

const AcelineAboutPage = () => {
  return (
    <main className="pt-15 md:pt-20 bg-[#fefbf6]">
      <Hero />
      <MissionAndVision />
      <Story />
      <OurValue />
      <LifeAtAceline />
      <Stats />
      <Cta />
    </main>
  );
};

export default AcelineAboutPage;
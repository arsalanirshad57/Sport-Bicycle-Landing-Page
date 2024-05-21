import React from 'react';
import HeroRight from '../components/HeroRight';
import HeroLeft from '../components/HeroLeft';

const HeroSection = () => {
  return (
    <div className=" pl-3 md:pl-10 bg-hero-bg h-screen bg-cover md:bg-contain bg-center md:bg-right  bg-no-repeat xl:bg-none bg-clip-padding">
        <div className="flex justify-between ">
          {/* LEFT */}
          <HeroLeft />
          {/* RIGHT */}
          <HeroRight />
        </div>
      </div>
  );
}

export default HeroSection;

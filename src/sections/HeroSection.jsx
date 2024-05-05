import React from 'react';
import HeroImage from '../components/HeroImage';
import HeroLeft from '../components/HeroLeft';

const HeroSection = () => {
  return (
    <div className="  pl-5 md:pl-10 bg-hero-bg h-screen bg-conver bg-no-repeat xl:bg-none  bg-center bg-clip-padding">
        <div className="flex justify-between ">
          {/* LEFT */}
          <HeroLeft />
          {/* RIGHT */}
          <HeroImage />
        </div>
      </div>
  );
}

export default HeroSection;

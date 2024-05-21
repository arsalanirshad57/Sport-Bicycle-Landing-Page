import React from 'react';
import bgImage from '../images/bg.png'

const HeroImage = () => {
  return (
    <div className=' relative h-screen  '>
      <img src={bgImage} alt="bg" className="absolute -bottom-1.5 right-0 max-w-700px" />
    </div>
  );
}

export default HeroImage;

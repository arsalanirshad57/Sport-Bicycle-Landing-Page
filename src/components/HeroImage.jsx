import React from 'react';
import bgImage from '../images/bg.png'
import barImage from '../images/bar.png'

const HeroImage = () => {
  return ( 
    <div className='hidden xl:block relative w-1-2 h-full '>
        {/* LEFT TOP  */}
        <img src={barImage} alt="" className=" absolute left-44 top-0 w-16 h-36 -rotate-3  " />
        {/* MAIN IMAGE  */}
        <img src={bgImage} alt="bg" className=" h-[600px] max-w-xl xl:max-w-[720px] mt-[108px]  " />
        {/* LEFT BOTTOM  */}
        <img src={barImage} alt="" className=" absolute left-4 bottom-2 w-16 " />
        {/* RIGHT BOTTTOM  */}
        <img src={barImage} alt="" className=" absolute right-20 -bottom-[85px] w-16 rotate-[75deg] " />
    </div>
  );
}

export default HeroImage;

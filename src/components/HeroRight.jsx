import React from 'react'
import HeroImage from './HeroImage'
import barImage from '../images/bar_check.png'

const HeroRight = () => {
    return (
        <div className=' hidden xl:block  relative h-screen w-1/2'>
            {/* LEFT TOP  */}
            <img src={barImage} alt="" className=" absolute left-36 top-20 -mt-1.5 w-44 h-3 rotate-70min z-10  " />
            <HeroImage />
            {/* LEFT BOTTOM  */}
            <img src={barImage} alt="" className=" absolute -left-16 bottom-24 mb-0.5 w-56 h-3 rotate-70min " />
            {/* RIGHT BOTTTOM  */}
            <img src={barImage} alt="" className=" w-48 absolute right-8 -bottom-0.5  " />
        </div>
    )
}

export default HeroRight


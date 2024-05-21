import React from 'react'
import barImage from '../images/bar_check.png'
import bgImage from '../images/bg.png'
import CompBg from '../images/comp_bg.png'
const HeroRight = () => {
    return (
        <div className="relative w-1/2 z-0">
            <img src={CompBg} alt="bg" className=" hidden xl:block absolute -bottom-1 right-0 h-screen  " />
        </div>
    )
}

export default HeroRight


import React from 'react'
import Icons from './Icons'
import Heading1 from '../components/Heading1'
import Span from '../components/Span'
import Button from '../components/Button'

const HeroLeft = () => {
    const iconNames = ['entypo-social:facebook', 'mdi:linkedin', 'fa6-brands:square-x-twitter']
    return (
        <div className='flex flex-col justify-center h-screen w-full xl:w-1/2 md:pt-14 '>
            <div className=" flex gap-1.5 pl-1.5">
                {iconNames.map((icon, index) => (
                    <Icons iconName={icon} index={index} />
                ))
                }
            </div>
            <Heading1 className={'md:-ml-2 mt-3 mb-2 sm:mt-4 sm:mb-3 '}>SPORT <br /> BICYLCE</Heading1>
            <div className="w-11/12 lg:w-2/3 xl:w-11/12 pl-1">
                <Span className={' !text-font-15 md:!text-font-17 !font-light leading-7 sm:leading-9 !uppercase'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non vitae ut mi pharetra diam adipiscing sed diam. Sagittis massa aliquet viverra enim orci mollis leo turpis. Vestibulum, semper auctor nisl purus molestie ultrices risus elit. Sed phasellus cras.</Span>
            </div>
            <Button className={'mt-5 '}>Watch Now</Button>
        </div>
    )
}

export default HeroLeft
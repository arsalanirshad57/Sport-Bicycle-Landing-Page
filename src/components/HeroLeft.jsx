import React from 'react'
import Icons from './Icons'
import Heading1 from '../components/Heading1'
import Span from '../components/Span'
import Button from '../components/Button'

const HeroLeft = () => {
    const iconNames = ['entypo-social:facebook', 'pajamas:linkedin', 'fa6-brands:square-x-twitter']
    return (
        <div className='flex flex-col justify-center gap-2 md:gap-2 h-screen w-full xl:w-1/2 pt-14 '>
            <div className=" flex gap-3 pl-1.5 sm:pl-1 md:pl-2">
                {iconNames.map((icon, index) => (
                    <Icons iconName={icon} index={index} className={' !w-7 h-7 sm:!w-8 sm:!h-8 mr-2 sm:!mr-0'} />
                ))
                }
            </div>
            <Heading1 className={'ml-0.5 md:-ml-0.5 !my-1 sm:!my-0 '}>SPORT <br /> BICYLCE</Heading1>
            <div className=" w-[90vw] sm:w-[90vw] lg:w-full xl:w-11/12 pl-1">
                <Span className={' !text-sm  sm:!text-font-15 md:!text-font-17 !font-light !leading-6 sm:!leading-9 !uppercase'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non vitae ut mi pharetra diam adipiscing sed diam. Sagittis massa aliquet viverra enim orci mollis leo turpis. Vestibulum, semper auctor nisl purus molestie ultrices risus elit. Sed phasellus cras.</Span>
            </div>
            <Button className={'mt-3 sm:mt-5 '}>Watch Now</Button>
        </div>
    )
}

export default HeroLeft
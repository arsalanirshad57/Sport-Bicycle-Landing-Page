import React from 'react'
import Icons from './Icons'
import Heading1 from '../components/Heading1'
import Span from '../components/Span'
import Button from '../components/Button'

const HeroLeft = () => {
    const iconNames = ['entypo-social:facebook', 'pajamas:linkedin', 'fa6-brands:square-x-twitter']
    return (
        <div className='flex flex-col justify-center gap-1 md:gap-2 h-screen w-full xl:w-1/2 pt-14 '>
            <div className=" flex gap-1.5 pl-1.5 sm:pl-1">
                {iconNames.map((icon, index) => (
                    <Icons iconName={icon} index={index} className={' !h-6 sm:!w-7 sm:!h-7 md:!w-8 md:!h-8'} />
                ))
                }
            </div>
            <Heading1 className={'ml-0.5 md:-ml-0.5 '}>SPORT <br /> BICYLCE</Heading1>
            <div className="w-11/12 lg:w-2/3 xl:w-11/12 pl-1">
                <Span className={' !text-sm  sm:!text-font-15 md:!text-font-17 !font-light !leading-6 sm:!leading-9 !uppercase'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non vitae ut mi pharetra diam adipiscing sed diam. Sagittis massa aliquet viverra enim orci mollis leo turpis. Vestibulum, semper auctor nisl purus molestie ultrices risus elit. Sed phasellus cras.</Span>
            </div>
            <Button className={'mt-5 '}>Watch Now</Button>
        </div>
    )
}

export default HeroLeft
import React from 'react'
import Icons from './Icons'
import Heading1 from '../components/Heading1'
import Span from '../components/Span'
import Button from '../components/Button'

const HeroLeft = () => {
    const iconNames = ['entypo-social:facebook', 'mdi:linkedin', 'fa6-brands:square-x-twitter']
    return (
        <div className='xl:w-1/2 h-full pt-40'>
            <div className=" flex gap-1.5 ">
                {iconNames.map((icon, index) => (
                    <Icons iconName={icon} index={index} />
                ))
                }
            </div>
            <Heading1 className={'md:-ml-2 mt-6 mb-1 sm:mb-4 '}>SPORT <br /> BICYLCE</Heading1>
            <div className=" px-1.5 sm:p-0 sm:w-11/12 lg:w-2/3 xl:w-11/12 ">
                <Span className={' !text-[17px] md:text-lg !font-light leading-8 md:leading-9'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non vitae ut mi pharetra diam adipiscing sed diam. Sagittis massa aliquet viverra enim orci mollis leo turpis. Vestibulum, semper auctor nisl purus molestie ultrices risus elit. Sed phasellus cras at varius pellentesque ante mattis lorem M.</Span>
            </div>
            <Button className={'mt-5'}>Watch Now</Button>
        </div>
    )
}

export default HeroLeft
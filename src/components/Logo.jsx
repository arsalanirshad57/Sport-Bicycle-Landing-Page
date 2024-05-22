import React from 'react'
import { Icon } from '@iconify/react';
import Span from './Span';
const Logo = () => {
    return (
            <div className=' flex items-center sm:gap-1 cursor-pointer'>
                <Icon icon="ic:outline-pedal-bike" className=' text-neutral h-14 w-14 sm:h-16 sm:w-16 !mr-2 sm:mr-0 ' />
                <Span className={' !text-2xl sm:!text-2xl !font-550 mt-1 '}>BICYLCES</Span>
            </div>
    )
}

export default Logo
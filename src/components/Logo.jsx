import React from 'react'
import { Icon } from '@iconify/react';
import Span from './Span';
const Logo = () => {
    return (
        <div className='flex items-center gap-3 cursor-pointer '>
            <Icon icon="ic:outline-pedal-bike" className=' text-neutral h-16 w-16 ' />
            <Span className={'!text-2xl !font-550 mt-1'}>BICYLCES</Span>
        </div>
    )
}

export default Logo
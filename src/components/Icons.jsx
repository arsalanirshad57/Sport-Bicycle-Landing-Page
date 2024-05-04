import { Icon } from '@iconify/react'
import React from 'react'

const Icons = ({iconName , className }) => {
  return (
    <Icon icon={iconName} className={` inline w-7 h-7 text-neutral ${className}`}/>
    )
}

export default Icons
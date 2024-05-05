import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import ResponsiveNavigation from '../components/ResponsiveNavigation'

const NavBar = () => {
    const navigationList = ['Home', 'Services', 'About', 'Contact']
  return (
    <div className='w-full absolute flex justify-between items-center px-6 md:px-10 py-4 pr-12 md:pr-20 '>
      <Logo />
      <Navigation data={navigationList} />
      <ResponsiveNavigation data={navigationList} />
    </div>
  )
}

export default NavBar
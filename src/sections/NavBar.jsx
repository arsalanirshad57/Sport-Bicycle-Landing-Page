import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

const NavBar = () => {
  const navigationList = ['Home', 'Services', 'About', 'Contact']
  return (
    <div className=" relative bg-black w-full z-50 px-6 md:px-10 ">
      <div className='w-full absolute flex justify-between items-center py-4 pr-12 md:pr-20 '>
        <Logo />
        <Navigation data={navigationList} />
      </div>
    </div>
  )
}

export default NavBar
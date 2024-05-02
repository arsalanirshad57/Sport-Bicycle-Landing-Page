import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

const NavBar = () => {
  const navigationList = ['Home', 'Services', 'About', 'Contact']
  return (
    <div className=" relative bg-black w-full z-50 ">
      <div className=' absolute w-full  flex justify-between items-center py-3 '>
        <Logo />
        <Navigation data={navigationList} />
      </div>
    </div>
  )
}

export default NavBar
import React from 'react'
import Span from '../components/Span'
import HeroSection from '../sections/HeroSection'
import ProductSection from '../sections/ProductSection'
import NavBar from '../sections/NavBar'

const Home = () => {
    return (
        <div className="">
            <NavBar/>
            <HeroSection/>
            <ProductSection/>
        </div>
    )
}

export default Home
import React from 'react'
import Span from '../components/Span'
import HeroSection from '../sections/HeroSection'
import ProductSection from '../sections/ProductSection'
import NavBar from '../sections/NavBar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="relative">
            <NavBar/>
            <HeroSection/>
            <ProductSection/>
            <Footer/>
        </div>
    )
}

export default Home
import React from 'react'

const Heading1 = ({ children, className }) => {
    return (
        <h1 className={`text-neutral text-[15vw] sm:text-7xl md:text-8xl leading-[14vw] sm:leading-[70px] md:leading-[93px] font-semibold select-none   ${className}`}>{children} </h1>
    )
}

export default Heading1
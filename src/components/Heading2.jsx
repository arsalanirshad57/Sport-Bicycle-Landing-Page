import React from 'react'

const Heading2 = ({ children, className }) => {
    return (
        <h1 className={`text-neutral text-2xl sm:text-3xl md:text-4xl font-semibold select-none   ${className}`}>{children} </h1>
    )
}

export default Heading2
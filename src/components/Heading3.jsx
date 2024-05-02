import React from 'react'

const Heading3 = ({ children, className }) => {
    return (
        <h1 className={`text-neutral text-xl font-medium select-none   ${className}`}>{children} </h1>
    )
}

export default Heading3
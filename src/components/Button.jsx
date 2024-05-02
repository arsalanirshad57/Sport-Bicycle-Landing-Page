import React from 'react'

function Button({children, className}) {
  return (
    <button className={` bg-neutral rounded-lg py-1.5 text-base px-6 text-center font-450  shadow-inner  focus:outline-none  ${className}`}>{children}</button>
  )
}

export default Button
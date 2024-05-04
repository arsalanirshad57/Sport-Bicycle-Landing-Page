import React from 'react'

function Button({children, className}) {
  return (
    <button className={` min-w-36 h-10 bg-neutral rounded-lg text-base px-6 text-center text-black font-450  shadow-inner  focus:outline-none  ${className}`}>{children}</button>
  )
}

export default Button
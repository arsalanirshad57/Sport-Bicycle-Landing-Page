import React from 'react'

function Span({children , className}) {
  
  return (
    <span className={` text-neutral font-450 text-lg ${className}`}>{children}</span>
  )
}

export default Span
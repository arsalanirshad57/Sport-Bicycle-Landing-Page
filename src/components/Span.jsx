import React from 'react'

function Span({children , className , onClick}) {
  
  return (
    <span className={` text-neutral font-450 text-lg ${className}`} onClick={onClick}>{children}</span>
  )
}

export default Span
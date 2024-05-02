import React from 'react'

function Paragraph ({children , className}) {
  return (
    <p className={` text-neutral text-font-15  font-normal  ${className}`}>{children}</p>
  )
}

export default Paragraph
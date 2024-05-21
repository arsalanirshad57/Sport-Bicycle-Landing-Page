import React from 'react'

const Badge = ({className , color}) => {
  return (
    <div className={` w-4 h-4 border rounded-full ${className} !bg-${color}`} >
        
    </div>
  )
}

export default Badge
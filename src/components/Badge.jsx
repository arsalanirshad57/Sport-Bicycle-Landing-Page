import React from 'react'

const Badge = ({ className, color, style, onClick }) => {
  return (
    <div className={` w-18px h-18px rounded-full cursor-pointer ${className} !bg-${color}`} style={style} onClick={onClick} >

    </div>
  )
}

export default Badge
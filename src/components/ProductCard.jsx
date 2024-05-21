import React, { useState } from 'react'
import Badge from './Badge'
import Heading3 from './Heading3'
import Span from './Span'
import AddToCard from './AddToCard'
import Img from '../images/products/pro_1.png'
const ProductCard = ({ data }) => {
  const [productImag, setProductImage] = useState()
  const [active, SetActive] = useState(0)
  const handleBadgeToggle = (index) => {
    SetActive((prevIndex) => prevIndex === index ? null : index)
  }
  
  return (
    <div className=' flex flex-col gap-3 border rounded-2xl col-span-2 sm:col-span-1 bg-[rgb(42, 42, 44)] pt-3 px-3 pb-3 '>
      {/* colors  */}
      <div className="flex justify-end gap-1.5 ">
        {data.colors.map((color, index) => {
          return (
            <span className={`w-[18px] h-[18px] rounded-full cursor-pointer  ${active === index ? ' border-2px' : ''}  ${index === 0 ?'border':''} `} onClick={() => handleBadgeToggle(index)} style={{ backgroundColor: color }}></span>
          )
        })}
      </div>
      {/* images  */}
      <div className="flex justify-center gap-1.5 border rounded-md h-44 ">
            <img src={''} alt='img' className=" w-64 mb-2 " />
      </div>
      <div className='flex flex-col gap-2'>
        <Heading3>{data.name}</Heading3>
        <Span className={'text-white !text-base -mt-1.5'}>{data.price}</Span>
        <AddToCard />
      </div>
    </div>
  )
}

export default ProductCard
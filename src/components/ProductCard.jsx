  import React, { useState } from 'react'
  import Badge from './Badge'
  import Heading3 from './Heading3'
  import Span from './Span'
  import AddToCard from './AddToCard'

  const ProductCard = ({ data }) => {
    // States 
    const [productImag, setProductImage] = useState([data.images[0]])
    const [active, SetActive] = useState('black')

  // Image toogler 
    const handleBadgeToggle = (label) => {
      SetActive((prevLabel) => prevLabel === label ? label : label)
      data.images.filter((imgPro) => {
        return imgPro.label == label ? setProductImage([imgPro]) : []
      })
    }

    return (
      <div className=' flex flex-col gap-3 rounded-2xl col-span-2 sm:col-span-1 bg-rgbBlack pt-3 px-3 pb-4 '>
        {/* colors  */}
        <div className="flex justify-end gap-1.5 ">
          {data.colors.map((color, index) => {
            return (
              <Badge className={` mx-3 sm:mx-0  ${ active === color.label ? ' border-2px' : ''}  ${index === 0 ? 'border' : ''} `} onClick={() => handleBadgeToggle(color.label, index)} style={{ backgroundColor: color.hex }}/>
            )
          })}
        </div>
        {/* images  */}
        <div className="flex justify-center gap-1.5 rounded-md h-44 my-1 sm:my-0">
          {
            productImag?.map((img) => {
              return (
                <img src={img.path} key={img.label} alt={img.label} className={` w-64 ${img.label == 'grey'? 'mt-2 ': ''}`} />
              )
            })
          } 
        </div>
        <div className='flex flex-col gap-2'>
          <Heading3>{data.name}</Heading3>
          <Span className={'text-white !text-base sm:-mt-1.5'}>{data.price}</Span>
          <AddToCard />
        </div>
      </div>
    )
  }

  export default ProductCard
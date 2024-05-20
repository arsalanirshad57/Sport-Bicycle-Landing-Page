import React from 'react'
import Badge from './Badge'

const ProductCard = ({ data }) => {
  console.log(data)
  return (
    <div className='border rounded-2xl col-span-1 bg-[rgb(42, 42, 44)] p-3 '>
      {/* colors  */}
      <div className="flex justify-end gap-1.5 ">
        {data.colors.map((color) => {
          console.log(color , 'color');
          return (
            <Badge className={`border bg-green `} />
          )
        })}
      </div>
      <div className="flex justify-center gap-1.5 ">
        {data.images.map((image) => {
          return (
            <img src={image} alt="" className="" />
          )
        })}
      </div>
      {/* images  */}
    </div>
  )
}

export default ProductCard
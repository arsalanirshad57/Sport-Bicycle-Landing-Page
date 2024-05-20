import React from 'react'
import ProductCard from './ProductCard'

const ProductCardsSection = () => {
    const ProductData = [
        {
            colors:['black','grey','blue','green'],
            images:['../images/products/product_5.png','product_8','product_6','product_7'],
            name:'QWIC Premium I MN7',
            price:'$10,0000',
        },
    ]
  return (

    <div className='border w-full  grid grid-rows-2 grid-cols-3 col-span-1 gap-4 ml-3 ' >
        {
            ProductData.map((data, index)=>(
                <ProductCard data={data} index={index} />
            ))
        }
    </div>
  )
}

export default ProductCardsSection
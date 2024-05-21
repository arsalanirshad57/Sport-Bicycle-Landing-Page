import React from 'react'
import Image from '../images/products/product_main.png'
import Bar from '../images/products/producut_bar.png'
import Heading2 from './Heading2'
import Span from './Span'

const ProductImage = () => {
  return (
    <div className='hidden xl:block relative h-screen w-5/12 '>
      <div className="hidden lg:block absolute pl-9 pt-5 z-10 ">
        <Heading2 className={' uppercase !mb-1.5 '}> Sport bicycle</Heading2>
        <Span className='uppercase '>Latest Products</Span>
      </div>
      <img src={Bar} alt="bar" className='absolute w-3 h-screen' />
      <img src={Image} alt="image" className="hidden lg:block h-screen pl-3 absolute bottom-0 " />
    </div>
  )
}

export default ProductImage
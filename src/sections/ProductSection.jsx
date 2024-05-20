import React from 'react'
import ProductImage from '../components/ProductImage'
import ProductCardsSection from '../components/ProductCardsSection'
const ProductSection = () => {
    return (
        <div className="flex justify-between ">
            <ProductImage />
            <ProductCardsSection/>
        </div>
    )
}

export default ProductSection
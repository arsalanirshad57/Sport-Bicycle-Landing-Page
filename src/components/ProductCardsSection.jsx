import React from 'react'
import ProductCard from './ProductCard'
import Heading2 from './Heading2'
import Span from './Span'
const ProductCardsSection = () => {
    const ProductData = [
        {
            colors: ['#0C0D0F', '#818797    ', '#634733', '#AEB1A4'],
            images: [
                { label: 'black', path: '/static/media/pro_3.c59c04f6c2bfdc9e5ac2.png' },
                { label: 'grey', path: '/static/media/pro_2.79a9c9d27e38df87b4ef.png' },
                { label: 'brown', path: '/static/media/pro_1.a8a0804ea185f4b8904c.png' },
                { label: 'green', path: '/static/media/pro_1.246e55fd521bd1c54166.png' },
            ],
            name: 'QWIC Premium I MN7',
            price: '$10,0000',
        },
    ]
    return (
        <div className="w-full px-4 sm:px-8 xl:pr-12">
            <div className="xl:hidden flex flex-col justify-center items-center py-8">
                <Heading2 className={'uppercase !text-[34px] sm:!text-5xl  lg:!text-6xl'}>Sport Bicylce</Heading2>
                <Span className='uppercase !text-base sm:!text-xl '>Latest Products</Span>
            </div>
            <div className='w-full grid grid-rows-2 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 col-span-1 gap-4 xl:ml-3  xl:px-0 pt-2 pb-2'>
                {
                    ProductData.map((data, index) => (
                        <ProductCard key={index} data={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCardsSection

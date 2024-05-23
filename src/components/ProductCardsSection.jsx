import React from 'react'
import ProductCard from './ProductCard'
import Heading2 from './Heading2'
import Span from './Span'
import Pro_4 from '../images/products/pro_4.png'
import Pro_3 from '../images/products/pro_3.png'
import Pro_2 from '../images/products/pro_2.png'
import Pro_1 from '../images/products/pro_1.png'

const ProductCardsSection = () => {
    const ProductData = [
        {
            colors: [
                { label: 'black', hex: '#0C0D0F' },
                { label: 'grey', hex: '#818797' },
                { label: 'brown', hex: '#634733' },
                { label: 'green', hex: '#AEB1A4' }
            ],
            images: [
                { label: 'black', path: Pro_3 },
                { label: 'grey', path: Pro_2},
                { label: 'brown', path: Pro_4},
                { label: 'green', path: Pro_1},
            ],
            name: 'QWIC Premium I MN7',
            price: '$10,0000',
        },
        {
            colors: [
                { label: 'black', hex: '#0C0D0F' },
                { label: 'grey', hex: '#818797' },
                { label: 'brown', hex: '#634733' },
                { label: 'green', hex: '#AEB1A4' }
            ],
            images: [
                { label: 'black', path: Pro_3 },
                { label: 'grey', path: Pro_2},
                { label: 'brown', path: Pro_4},
                { label: 'green', path: Pro_1},
            ],
            name: 'QWIC Premium I MN7',
            price: '$10,0000',
        },
        {
            colors: [
                { label: 'black', hex: '#0C0D0F' },
                { label: 'grey', hex: '#818797' },
                { label: 'brown', hex: '#634733' },
                { label: 'green', hex: '#AEB1A4' }
            ],
            images: [
                { label: 'black', path: Pro_3 },
                { label: 'grey', path: Pro_2},
                { label: 'brown', path: Pro_4},
                { label: 'green', path: Pro_1},
            ],
            name: 'QWIC Premium I MN7',
            price: '$10,0000',
        },
        {
            colors: [
                { label: 'black', hex: '#0C0D0F' },
                { label: 'grey', hex: '#818797' },
                { label: 'brown', hex: '#634733' },
                { label: 'green', hex: '#AEB1A4' }
            ],
            images: [
                { label: 'black', path: Pro_3 },
                { label: 'grey', path: Pro_2},
                { label: 'brown', path: Pro_4},
                { label: 'green', path: Pro_1},
            ],
            name: 'QWIC Premium I MN7',
            price: '$10,0000',
        },
        {
            colors: [
                { label: 'black', hex: '#0C0D0F' },
                { label: 'grey', hex: '#818797' },
                { label: 'brown', hex: '#634733' },
                { label: 'green', hex: '#AEB1A4' }
            ],
            images: [
                { label: 'black', path: Pro_3 },
                { label: 'grey', path: Pro_2},
                { label: 'brown', path: Pro_4},
                { label: 'green', path: Pro_1},
            ],
            name: 'QWIC Premium I MN7',
            price: '$10,0000',
        },
        {
            colors: [
                { label: 'black', hex: '#0C0D0F' },
                { label: 'grey', hex: '#818797' },
                { label: 'brown', hex: '#634733' },
                { label: 'green', hex: '#AEB1A4' }
            ],
            images: [
                { label: 'black', path: Pro_3 },
                { label: 'grey', path: Pro_2},
                { label: 'brown', path: Pro_4},
                { label: 'green', path: Pro_1},
            ],
            name: 'QWIC Premium I MN7',
            price: '$10,0000',
        },
       
    ]
    return (
        <div className="w-full px-4 sm:px-8  xl:pl-0 xl:pr-12">
            <div className="xl:hidden flex flex-col justify-center items-center py-8">
                <Heading2 className={'uppercase !text-[34px] sm:!text-5xl  lg:!text-6xl'}>Sport Bicylce</Heading2>
                <Span className='uppercase !text-base sm:!text-xl '>Latest Products</Span>
            </div>
            <div className='w-full grid grid-rows-2 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 col-span-1 gap-6 sm:gap-4 xl:px-0 pt-2 pb-2 '>
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

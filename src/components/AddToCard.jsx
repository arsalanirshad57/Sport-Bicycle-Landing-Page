import React from 'react'
import Span from './Span'
import Icons from './Icons'

const AddToCard = () => {
    return (
        <div className={`flex gap-4 items-center justify-center w-full h-9 border border-neutral rounded-md cursor-pointer bg-neutral `}>
            <Icons iconName={'gg:add'} className={'!w-6 !h-6 !text-black '} />
            <Span className={'!text-black !text-base font-medium  '}>Add To Cart</Span>
        </div>
    )
}

export default AddToCard
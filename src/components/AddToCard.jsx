import React from 'react'
import Span from './Span'
import Icons from './Icons'

const AddToCard = () => {
    return (
        <div className={`flex gap-4 items-center justify-center w-full h-9 border border-neutral rounded-md cursor-pointer bg-neutral mt-2 sm:mt-0 `}>
            <Icons iconName={'gg:add'} className={'!w-6 !h-6 !text-black '} />
            <Span className={'!text-black !text-base font-medium ml-3 sm:ml-0 '}>Add To Cart</Span>
        </div>
    )
}

export default AddToCard
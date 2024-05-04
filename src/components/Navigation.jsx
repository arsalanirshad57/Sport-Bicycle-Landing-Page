import React, { useState } from 'react'
import Span from './Span'

const Navigation = ({ data }) => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <nav className={` `}>
            <div className="hidden md:flex gap-5">            {
                data.map((navItem, index) => (
                    <Span className={'!text-xl relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-neutral before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-neutral after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}>{navItem}</Span>
                ))
            }
            </div>
            <div className=" cursor-pointer " onClick={() => setOpenNav(!openNav)}>
                {openNav ?
                    <span className="">
                        X
                    </span> :
                    <span className="">
                        Y
                    </span>
                }
            </div>
            {
                openNav && (
                    <div className=" flex flex-col bg-black">
                        {
                            data.map((navItem, index) => (
                                <Span className={'!text-xl relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-neutral before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-neutral after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}>{navItem}</Span>
                            ))
                        }
                    </div>
                )
            }
        </nav>
    )
}

export default Navigation
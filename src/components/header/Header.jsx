import { AiOutlineMenu } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import React from 'react'
import Navbar from '../navbar/Navbar'

const Header = () => {
    return (
        <div className='h-[10vh] border-b-[.1vw] flex items-center justify-between px-[4vw]'>
            <div className="flex items-center gap-[.2vw]">
                <span className="text-4xl"><BiHomeHeart /></span>
                <h1 className='text-3xl font-bold'>Logo</h1>
            </div>
            <div className="max-sm:hidden">
                <Navbar />
            </div>
            <div className="sm:hidden">
                <span className="text-3xl">
                    <AiOutlineMenu />
                </span>
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import img from '../../images/banner.png'
import { SlArrowDown } from 'react-icons/sl'

const Banner = ({ img }) => {
    return (
        <div className='h-[90vh] flex flex-col relative items-center justify-center'>
            <div className='w-full  flex max-md:flex-col-reverse'>
                <div className='flex-1 flex flex-col gap-[1vw]'>
                    <p className='text-gray-500 text-4xl  max-sm:text-3xl'>Lorem, ipsum.</p>
                    <h1 className='text-6xl max-md:text-5xl max-sm:text-4xl'>Lorem, ipsum dolor. Lorem ipsum dolor sit amet.</h1>
                    <p className='text-gray-500 text-2xl max-md:text-[3vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, pariatur!</p>
                    <div className=''>
                        <button className='bg-green-800 duration-100 text-2xl max-md:text-xl text-white font-bold py-[.8vw] px-[4vw] rounded-[.5vw] active:scale-95'>Get Started</button>
                    </div>
                </div>
                <div className='flex-1 flex justify-center'>
                    <img className='w-full max-md:w-[70vw] max-sm:w-[90vw] h-full object-contain' src={img} alt="" />
                </div>
            </div>
            <div className='absolute flex  justify-center bottom-0 w-full text-center py-2'>
                <span className="animate-bounce text-2xl max-md:text-xl text-gray-500">
                    <SlArrowDown />
                    <SlArrowDown />
                </span>
            </div>
        </div>
    )
}

export default Banner

import React from 'react'

const Cards = ({ icon, p }) => {
    return (
        <div className='flex overflow-x-hidden justify-center items-center gap-[4vw] py-20'>
            <div className='flex h-full flex-col gap-[2vw] items-center'>
                <div className='w-[10vw] h-[10vw] max-sm:w-[25vw] max-sm:h-[25vw] max-md:w-[18vw] max-md:h-[18vw] flex justify-center items-center bg-gray-200 rounded-full text-7xl max-md:text-5xl text-white'>{icon}</div>
                <div className='text-center text-xl max-sm:text-[5vw] font-medium'>{p}</div>
            </div>
        </div>
    )
}

export default Cards

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const RootLayout = () => {
    return (
        <div className='select-none h-[100vh] w-[100vw] duration-300 overflow-x-hidden overflow-hidden'>
            <div>
                <Header />
            </div>
            <div className='h-[90vh] w-[100vw] overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout

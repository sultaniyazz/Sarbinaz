import React from 'react'
import { navbarList } from '../../constants/navbar-list/navbar'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            {
                navbarList.map((item) => (
                    <NavLink key={item.id} to={item.url} className='text-lg px-[1vw] max-md:px-[2vw] py-[0.5vw] text-gray-600 duration-300 font-semibold'>{item.title}</NavLink>
                ))
            }
        </div>
    )
}

export default Navbar

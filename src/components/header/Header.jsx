import React from 'react'
import { NavLink, Link } from "react-router-dom"
import "./header.css"
import Icons from './icons/Icons'

const Header = () => {
    return (
        <>
            <header className='flex justify-between align-center shadow-md px-12 py-3 bg-slate-50  max-[428px]:px-5'>
                <div className="logo font-medium text-2xl ">
                    <Link to="/">Grosso</Link>
                </div>
                <div className="navs max-[640px]:hidden">
                    <NavLink className="mx-2 font-medium  py-1" to="/">Home</NavLink>
                    <NavLink className="mx-2 font-medium  py-1" to="/products">Products</NavLink>
                    <NavLink className="mx-2 font-medium  py-1" to="/offers">Offers</NavLink>
                    <NavLink className="mx-2 font-medium  py-1" to="/contact">Contact Us</NavLink>
                    <NavLink className="mx-2 font-medium  py-1" to="/about">About Us</NavLink>
                </div>
                <div className="icons flex align-center">
                    <Icons />
                </div>
            </header>
        </>
    )
}

export default Header
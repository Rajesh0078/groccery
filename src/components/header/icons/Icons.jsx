import React from 'react'
import { FaShoppingBasket, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Icons = () => {
    return (
        <>
            <Link className='hover:text-orange-500'><FaShoppingBasket className='mx-1 text-xl max-[768px]:mx-0' /><p className='max-[768px]:hidden'>Cart</p></Link>
            <Link to='/login' className='hover:text-orange-500'><FaUser className='mx-1 stroke-4 text-xl max-[768px]:mx-0' /><p className='max-[768px]:hidden'>Login</p></Link>
        </>
    )
}

export default Icons
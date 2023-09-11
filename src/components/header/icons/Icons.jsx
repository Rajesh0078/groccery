import React, { useContext } from 'react'
import { FaShoppingBasket, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { store } from '../../../App'

const Icons = () => {
    const { user, setToken } = useContext(store)
    return (
        <>

            <Link className='hover:text-orange-500 flex items-center mx-2 max-[382px]:mx-2 '><FaShoppingBasket className='mx-1 stroke-4 text-xl max-[768px]:mx-0' /><p className='max-[768px]:hidden'>Cart</p></Link>
            {
                user.fullname ?
                    <div className='flex '>
                        <div className='hover:text-orange-500 flex items-center'>
                            <FaUser className='mx-1 max-[382px]:mx-0 stroke-4 text-xl max-[768px]:mx-0 ' />
                            <p className='ms-1'>{user.fullname}</p>
                        </div>
                        <p className='ms-3 cursor-pointer hover:text-orange-500' onClick={() => setToken([])}>logout</p>
                    </div>

                    :

                    <Link to='/login' className='hover:text-orange-500'><FaUser className='text-xl max-[768px]:mx-0 max-[382px]:mx-0' /><p className='max-[768px]:hidden ms-2'>Login</p></Link>
            }
        </>
    )
}

export default Icons
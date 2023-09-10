import React, { useContext, useState } from 'react'
import { store } from '../../App'

const Login = () => {
    const { setPageName } = useContext(store)

    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    })

    const clickHandler = () => {
        setPageName("SignUp")
    }

    const changeHandler = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }



    return (
        <>
            <form className='text-left flex flex-col mt-4' >
                <label className='mb-2 mt-4' htmlFor="email">Email</label >
                <input className='w-[100%] py-2 px-2 rounded-md border border-slate-300' placeholder='Enter Your Email' type="email" id='email' value={inputValue.email} name='email' required onChange={changeHandler} />
                <label className='mb-2 mt-4' htmlFor="password">Password</label>
                <input className='w-[100%] py-2 px-2 rounded-md border border-slate-300' type="password" placeholder='Enter Your password' value={inputValue.password} id='password' name='password' required onChange={changeHandler} />
                <p className='mb-4 mt-2 text-orange-500 cursor-pointer'>Forgot password?</p>
                <input className='w-[100%] py-2 px-2 rounded-md border border-slate-300 bg-gradient-to-r from-[orangered] text-white to-orange-400' type="submit" value={"Login"} />
                <p className='mb-2 mt-10 max-[382px]:mt-5 max-[382px]:text-sm'>don't have an Account <span className='text-orange-500 ms-2 cursor-pointer ' onClick={clickHandler} >signUp Now</span></p>
            </form >
        </>
    )
}

export default Login
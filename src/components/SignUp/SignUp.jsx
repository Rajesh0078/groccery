import React, { useEffect, useState } from 'react'
import './signup.css'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const SignUp = () => {

    const [inputData, setInputData] = useState({
        fullname: "",
        mobile: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const [data, setData] = useState([])

    const chanegHandler = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (data.fullname) {
            toast.success("Registration success", {
                position: 'top-right',
                autoClose: 3000, // Notification will auto-close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        if (data.msg) {
            toast.success(data.msg, {
                position: 'top-right',
                autoClose: 3000, // Notification will auto-close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }, [data])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("https://g-server-sa99.onrender.com/register", inputData).then((res) => setData(res.data))
        setInputData({
            fullname: "",
            mobile: "",
            email: "",
            password: "",
            cpassword: ""
        })

    }

    return (
        <>
            <form onSubmit={submitHandler} className='text-left mt-3 max-[382px]:mt-1 flex flex-col'>
                <div className="container_input flex max-[382px]:flex-col  max-[382px]:gap-0 gap-3">
                    <div className="flex flex-col">
                        <label className='mb-2 mt-4  max-[382px]:text-sm max-[382px]:mb-1 ' htmlFor="fullname" > Full name</label >
                        <input className=' py-2 px-2 max-[382px]:py-1  rounded-md border border-slate-300' placeholder='Enter Your Full name' value={inputData.fullname} type="text" id='fullname' name='fullname' required onChange={chanegHandler} />
                    </div>
                    <div className="flex flex-col">
                        <label className='mb-2 mt-4 max-[382px]:text-sm max-[382px]:mb-1  ' htmlFor="mobile">Mobile</label>
                        <input className=' py-2 px-2 max-[382px]:py-1 rounded-md border border-slate-300' placeholder='Enter Your Mobile' value={inputData.mobile} type="number" id='mobile' name='mobile' required onChange={chanegHandler} />
                    </div>
                </div>
                <div className="flex  flex-col ">
                    <label className='mt-2 mb-2  max-[382px]:text-sm max-[382px]:mb-1 ' htmlFor="email">Email</label>
                    <input className='w-[100%] py-2 max-[382px]:py-1 px-2 rounded-md border border-slate-300' placeholder='Enter Your Email' value={inputData.email} type="email" id='email' name='email' required onChange={chanegHandler} />
                </div>
                <div className="flex gap-3 max-[382px]:flex-col  max-[382px]:gap-0">
                    <div className="flex flex-col">
                        <label className='mb-2 mt-2 max-[382px]:text-sm max-[382px]:mb-1 ' htmlFor="password">Password</label>
                        <input className=' py-2 px-2 max-[382px]:py-1 rounded-md border border-slate-300' type="password" placeholder='Enter Your password' value={inputData.password} id='password' name='password' required onChange={chanegHandler} />
                    </div>
                    <div className="flex flex-col">
                        <label className='mb-2 mt-2' htmlFor="cpassword">Confirm Password</label>
                        <input className=' py-2 px-2 max-[382px]:py-1 rounded-md border border-slate-300' type="password" placeholder='Confirm Your password' value={inputData.cpassword} id='cpassword' name='cpassword' required onChange={chanegHandler} />
                    </div>
                </div>
                <input className=' mt-6 max-[382px]:mt-3 max-[382px]:py-1 py-2 px-2 rounded-md border border-slate-300 bg-gradient-to-r from-[orangered] text-white to-orange-400' type="submit" value={"SignUp"} />
                <p className='mt-3  max-[382px]:mt-2  max-[382px]:text-sm'>Already have an Account <span className='text-orange-500 ms-2 cursor-pointer '>Login Now</span></p>
            </form >
            <ToastContainer />
        </>
    )
}

export default SignUp
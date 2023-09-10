import React, { useContext } from 'react'
import "./auth.css"
import Login from '../../components/login/Login'
import SignUp from '../../components/SignUp/SignUp'
import { store } from '../../App'

const Authorization = () => {

    const { pageName, setPageName } = useContext(store)

    const loginclickHandler = (e) => {
        e.target.classList.add("active-x")
        const parent = e.target.parentElement
        parent.childNodes[1].classList.remove("active-x")
        setPageName(e.target.innerText)
    }

    const signupHandler = (e) => {
        e.target.classList.add("active-x")
        const parent = e.target.parentElement
        parent.childNodes[0].classList.remove("active-x")
        setPageName(e.target.innerText)
    }

    return (
        <>
            <div className="flex min-h-screen bg-gradient-to-r from-orange-300  to-orange-700">
                <div className="basis-1/2 "></div>
                <div className="basis-1/2 flex items-center justify-center text-center p-12 ">
                    <div className="card_container w-[35rem] h-[100%] px-10 py-6 rounded-lg bg-white shadow-md shadow-slate-900 ">
                        <h2 className='text-3xl font-medium'>{pageName} Form</h2>
                        <div className="btn-nav mt-5 border rounded-md">
                            <p className='py-2 px-[4rem] text-lg  rounded-md w-[50%]  cursor-pointer active-x' onClick={loginclickHandler}>Login</p>
                            <p className='py-2 px-[4rem] text-lg rounded-md w-[50%] cursor-pointer' onClick={signupHandler}>SignUp</p>
                        </div>
                        {

                            pageName === "Login" ? <Login /> : <SignUp />
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Authorization
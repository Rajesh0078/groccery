import React, { useContext, useState } from 'react'
import { store } from '../../App'
import { ImCancelCircle } from "react-icons/im"
import axios from 'axios'


const CartContainer = () => {
    const { setCart } = useContext(store)
    const [pincodeData, setPincodeData] = useState("")
    const [pincode, setPincode] = useState("")

    const changeHandler = (e) => {
        setPincode(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://api.postalpincode.in/pincode/${pincode}`).then((res) => setPincodeData(res.data))
        setPincode("")
        //console.log(pincodeData)
    }




    return (
        <>
            <div id='cart' className="cart_container h-screen w-[100%] border left-0 right-0  top-0 bg-slate-100 z-[1000]  pt-5 fixed " >
                <div className='right-10 max-[826px]:right-5 absolute cursor-pointer'><ImCancelCircle size={25} onClick={() => setCart(false)} /></div>
                <div className="cart_content bg-white h-[100%] pb-[5rem] max-[682px]:overflow-y-scroll mt-[5rem] rounded-t-[2rem] p-5 ">
                    <h2 className='text-2xl font-medium pb-2  border-b border-slate-500 mb-2'>Shopping cart</h2>
                    <div className="flex gap-5 h-[100%] max-[682px]:flex-col mt-4">
                        <div className=" basis-2/3 ">
                            <div className="flex justify-between px-12 max-[826px]:px-0 max-[826px]:ps-0 max-[462px]:flex-col  bg-[#ececec] border">
                                <p className='py-1 max-[826px]:text-sm max-[826px]:ps-1'><span className='text-slate-600'>Deliver to: </span>{pincodeData.length >= 1 ? <span className='mx-1'>{pincodeData[0].PostOffice[0].Block}</span> : "Enter pincode -->"}</p>
                                <form onSubmit={submitHandler} className=' max-[826px]:text-sm'>
                                    <input type="search" name='pincode' value={pincode} placeholder='Get your area details' className='border-0 align-middle px-1 h-[100%] max-[462px]:py-1 max-[826px]:w-36 max-[462px]:w-[75%]' onChange={changeHandler} />
                                    <input type="submit" value="Get area" className='cursor-pointer border-0 align-middle max-[826px]:px-1 px-2 text-orange-500 bg-white h-[100%] max-[462px]:py-[.1rem] max-[462px]:w-[25%]' />
                                </form>
                            </div>
                            <div className="product_deails">

                            </div>
                        </div>
                        <div className="checkout basis-1/3  max-[682px]:w-[100%] ">
                            <h2 className='text-xl font-medium pb-5 max-[826px]:text-lg max-[826px]:pb-1 '>Order summary</h2>
                            <div className="flex justify-between py-2 max-[826px]:text-sm">
                                <p>Price (5 items)</p>
                                <p>$4242</p>
                            </div>
                            <div className="flex justify-between py-2 max-[826px]:text-sm">
                                <p>Price (5 items)</p>
                                <p>$4242</p>
                            </div>
                            <div className="flex justify-between py-2 max-[826px]:text-sm">
                                <p>Delivery Charges</p>
                                <p className='text-green-600'>Free</p>
                            </div>
                            <div className="flex justify-between py-2 max-[826px]:text-sm">
                                <p>Discount</p>
                                <p className='text-green-600'>− ₹15,550</p>
                            </div>
                            <hr className='mt-5' />
                            <div className="flex justify-between py-4 max-[826px]:text-sm max-[826px]:py-2">
                                <p className='text-lg font-medium max-[826px]:text-sm'>Total Amount</p>
                                <p>$4242</p>
                            </div>
                            <p className='w-[100%] bg-orange-400 text-white text-center text-xl max-[826px]:text-lg max-[826px]:py-1 cursor-pointer py-2 mt-2'>Place Order</p>
                            <p className='text-center w-[100%] text-slate-500 my-3 max-[826px]:my-1'>or</p>
                            <p className='text-center w-[100%] cursor-pointer hover:text-orange-400 max-[826px]:text-sm'>Continue Shopping</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CartContainer
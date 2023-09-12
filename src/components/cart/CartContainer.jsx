import React, { useContext, useState } from 'react'
import { store } from '../../App'
import { ImCancelCircle } from "react-icons/im"
import axios from 'axios'
import "../../pages/products/App.css"


const CartContainer = () => {
    const { cartData, setCart, cartValue } = useContext(store)
    const [pincodeData, setPincodeData] = useState("")
    const [pincode, setPincode] = useState("")
    //const [cartData, setCartData] = useState([])
    //const [cartValue, setCartValue] = useState([0])
    const changeHandler = (e) => {
        setPincode(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://api.postalpincode.in/pincode/${pincode}`).then((res) => setPincodeData(res.data))
        setPincode("")
        //console.log(pincodeData)
    }
    /*useEffect(() => {
        axios.post("https://g-server-sa99.onrender.com/getcart", { user: user.email }).then((res) => setCartData(res.data))
        if (cartData[0] === undefined) {
            return;
        }
        else if (cartData[0].length > 0) {
            setCartLength(cartData[0].length)
            let value = cartData[0].map((i) => Math.ceil(i.price * 100))
            setCartValue(value.reduce((prev, curre) => { return prev + curre }, 0))
        }
    }, [user, cartData, setCartLength])*/


    return (
        <>
            <div id='cart' className="cart_container h-screen w-[100%] border left-0 right-0  top-0 bg-slate-100 z-[1000]  pt-5 fixed " >
                <div className='right-10 max-[826px]:right-5 absolute cursor-pointer'><ImCancelCircle size={25} onClick={() => setCart(false)} /></div>
                <div className="cart_content bg-white h-[100%] max-[682px]:overflow-y-scroll pb-[5rem]  mt-[5rem] rounded-t-[2rem] p-5 ">
                    <h2 className='text-2xl font-medium pb-2  border-b border-slate-500 mb-2'>Shopping cart</h2>
                    <div className="flex gap-5 h-[100%] max-[682px]:flex-col mt-4">
                        <div className=" basis-2/3 ">
                            <div className="flex justify-between px-12  max-[983px]:px-0 max-[826px]:ps-0 max-[462px]:flex-col  bg-[#ececec] border">
                                <p className='py-1 max-[826px]:text-sm max-[826px]:ps-1'><span className='text-slate-600'>Deliver to: </span>{pincodeData.length >= 1 ? <span className='mx-1'>{pincodeData[0].PostOffice[0].Block}</span> : "Enter pincode -->"}</p>
                                <form onSubmit={submitHandler} className=' max-[826px]:text-sm'>
                                    <input type="search" name='pincode' value={pincode} placeholder='Get your area details' className='border-0 align-middle px-1 h-[100%] max-[462px]:py-1 max-[826px]:w-36 max-[462px]:w-[75%] ' onChange={changeHandler} />
                                    <input type="submit" value="Get area" className='cursor-pointer border-0 align-middle max-[826px]:px-1 px-2 text-orange-500 bg-white h-[100%] max-[462px]:py-[.1rem] max-[462px]:w-[25%]' />
                                </form>
                            </div>
                            <div className="product_deails border mt-3 overflow-y-scroll h-[24rem]">
                                {
                                    cartData[0] === undefined ? <center>Please Login</center> :
                                        cartData[0].length === 0 ? <center>Cart is empty</center> :
                                            <>
                                                {
                                                    cartData[0].map((i, n) => {
                                                        return <div key={n} className='p-2 flex gap-4  '>
                                                            <img src={i.image} alt="images" className='w-[10rem] max-[826px]:w-[8rem] max-[826px]: ' />
                                                            <div>
                                                                <h2 className='text-lg max-[826px]:text-[1rem]'>{i.name}</h2>
                                                                <p className='text-slate-600 max-[826px]:text-[.8rem]'>{i.description}</p>
                                                                <p className='block my-1 max-[826px]:text-[.8rem] '><span className='text-slate-600'>seller: </span>{i.store}</p>
                                                                <p className='line-through max-[826px]:text-[.7rem] text-slate-600 text-[.8rem]'>₹{Math.ceil(i.price * 100)}</p>
                                                                <p className='ms-3 text-xl max-[826px]:text-lg font-normal'>₹{Math.ceil((i.price * 100) * 0.9)}</p>
                                                                <p className='ms-3 text-sm text-green-600 max-[826px]:text-[.7rem]'>10% Offer</p><br className='max-[826px]:hidden' />
                                                                <p className='px-2 text-white rounded-sm mt-2 text-sm cursor-pointer bg-orange-300 max-[826px]:ms-10 max-[520px]:ms-0'>Remove item</p>
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </>
                                }
                            </div>
                        </div>
                        {cartData[0] === undefined ? <center>Please Login</center> :
                            cartData[0].length === 0 ? <center>Cart is empty</center> :
                                <div className="checkout basis-1/3  max-[682px]:w-[100%] ">
                                    <h2 className='text-xl font-medium pb-5 max-[826px]:text-lg max-[826px]:pb-1 '>Order summary</h2>
                                    <div className="flex justify-between py-2 max-[826px]:text-sm">
                                        <p>Price ({cartData[0].length} items)</p>
                                        <p>₹{
                                            cartValue
                                        }</p>
                                    </div>
                                    <div className="flex justify-between py-2 max-[826px]:text-sm">
                                        <p>Offer</p>
                                        <p className='text-green-600'>13%</p>
                                    </div>
                                    <div className="flex justify-between py-2 max-[826px]:text-sm">
                                        <p>Discount</p>
                                        <p className='text-green-600'>₹− {Math.ceil(cartValue * 0.13)}</p>
                                    </div>
                                    <div className="flex justify-between py-2 max-[826px]:text-sm">
                                        <p>Delivery Charges</p>
                                        <p className='text-green-600'>Free</p>
                                    </div>

                                    <hr className='mt-5' />
                                    <div className="flex justify-between py-4 max-[826px]:text-sm max-[826px]:py-2">
                                        <p className='text-lg font-medium max-[826px]:text-sm'>Total Amount</p>
                                        <p>₹{Math.ceil(cartValue * 0.87)}</p>
                                    </div>
                                    <p className='w-[100%] bg-orange-400 text-white text-center text-xl max-[826px]:text-lg max-[826px]:py-1 cursor-pointer py-2 mt-2'>Place Order</p>
                                    <p className='text-center w-[100%] text-slate-500 my-3 max-[826px]:my-1'>or</p>
                                    <p className='text-center w-[100%] cursor-pointer hover:text-orange-400 max-[826px]:text-sm'>Continue Shopping</p>
                                </div>}
                    </div>
                </div>
            </div >
        </>
    )
}

export default CartContainer

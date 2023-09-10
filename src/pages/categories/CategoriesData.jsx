import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import "./categoriesData.css"
import { store } from '../../App'
import Header from '../../components/header/Header'
import PreLoader from '../../components/preloader/PreLoader'
import { FaShoppingBasket } from 'react-icons/fa'

const CategoriesData = () => {
    const { categoryValue } = useContext(store)
    const [data, setData] = useState([])
    const [sortValue, setSortValue] = useState(0)

    useEffect(() => {
        axios.post("https://g-server-sa99.onrender.com/categories/nav", { value: categoryValue, sort: sortValue }).then((res) => { setData(res.data) })
    }, [categoryValue, sortValue])


    const sortClickHandelr = (e) => {
        setData([])
        let value = e.target.innerText
        if (value === "Price -- Low to High") {
            setSortValue(-1)

        }
        if (value === "Price -- High to Low") {
            setSortValue(1)
        }
        if (value === "Popularity") {
            setSortValue(0)
        }
    }
    //console.log(data)

    return (
        <>
            <Header />
            <div className='bg-slate-100 flex py-[1rem]'>
                <div className=" new my-[3rem] mx-3 bg-white  h-[60rem] ">
                    <span className='px-2'>gudyfd</span>
                    <span className='px-2'>gudyfd</span>
                    <span className='px-2'>gudyfd</span>
                    <span className='px-2'>gudyfd</span>
                </div>
                {data.length === 0 ? <div className=' w-[100%]'><center><PreLoader /></center> </div> :
                    <div className=" bg-white me-2 new mt-12 ">
                        <div className='border border-b-slate-300 py-2 px-4'>
                            <p className='font-medium '>Sort By</p>
                            <p className='mx-4 cursor-pointer' onClick={sortClickHandelr}>Popularity</p>
                            <p className='mx-4 cursor-pointer' onClick={sortClickHandelr}>Price -- Low to High</p>
                            <p className='mx-4 cursor-pointer' onClick={sortClickHandelr}>Price -- High to Low</p>
                        </div>
                        <div className='data_container'>
                            {

                                data.map((item, index) => {
                                    return <div key={index} className='card-x mb-10 lg:basis-1/4 md:basis-1/2 sm:basis-1 px-5 py-2'>
                                        <center><img src={item.product_image} alt="hi" className='w-[8rem] h-[8rem]' /></center>
                                        <h2 className='text-[1rem] font-medium mt-3 h-[2.5rem]'>{item.product_name}</h2>
                                        <p className='text-[.8rem] mt-2 over'>{item.product_description}</p>
                                        <span className='font-medium mt-3'>₹{Math.ceil(((item.product_price) * 100) * 0.9)}</span>
                                        <span className='ms-2 text-[.8rem] text-slate-700 line-through'>₹{Math.ceil((item.product_price) * 100)}</span>
                                        <span className='ms-4 text-[.9rem] text-green-800 font-medium'>10% off</span>
                                        <div><FaShoppingBasket className='inline' /><span className='mx-2'>{item.name}</span></div>
                                        <div className="btn mt-3 flex justify-between">
                                            <span className='border border-slate-300 py-2 px-6 text-orange-600 font-medium cursor-pointer'>Add to cart</span>
                                            <select className='border border-slate-300 py-[.44rem] px-1'>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                                <option value="1">6</option>
                                                <option value="1">7</option>
                                            </select>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default CategoriesData

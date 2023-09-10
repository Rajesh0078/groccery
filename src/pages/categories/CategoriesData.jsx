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
        console.log(value)
        if (value === "Low to High") {
            setSortValue(-1)
        }
        if (value === "High to Low") {
            setSortValue(1)
        }
        if (value === "Popularity") {
            setSortValue(0)
        }
    }

    return (
        <>
            <Header />
            <div className='bg-slate-100 flex py-[1rem]'>
                <div className=" new my-[3rem] mx-3 bg-white  h-[60rem] max-[382px]:hidden">
                    <span className='px-2'>gudyfd</span>
                    <span className='px-2'>gudyfd</span>
                    <span className='px-2'>gudyfd</span>
                    <span className='px-2'>gudyfd</span>
                </div>
                {data.length === 0 ? <div className=' w-[100%]'><center><PreLoader /></center> </div> :
                    <div className=" bg-white me-2  new mt-12 ms-2">
                        <div className='border border-b-slate-300 py-2 px-4 max-[382px]:text-sm'>
                            <p className='font-medium me-1'>Sort By:</p>
                            <p className='mx-4 cursor-pointer max-[382px]:mx-[.4rem] ' onClick={sortClickHandelr}>Popularity</p>
                            <p className='mx-4 cursor-pointer max-[382px]:mx-[.4rem] ' onClick={sortClickHandelr}><span className='max-[382px]:hidden'>Price -- </span>Low to High</p>
                            <p className='mx-4 cursor-pointer max-[382px]:mx-[.4rem] ' onClick={sortClickHandelr}><span className='max-[382px]:hidden'>Price -- </span>High to Low</p>
                        </div>
                        <div className='data_container max-[382px]:gap-3 max-[382px]:text-sm'>
                            {

                                data.map((item, index) => {
                                    return <div key={index} className='card-x mb-10 max-[382px]:mb-3 lg:basis-1/4 md:basis-1/2 sm:basis-1 px-5 py-2 max-[382px]:px-3 '>
                                        <center><img src={item.product_image} alt="hi" className='w-[8rem] h-[8rem] max-[382px]:w-[5rem] max-[382px]:h-[5rem] ' /></center>
                                        <h2 className='text-[1rem] max-[382px]:text-[.9rem] font-medium mt-3 h-[2.5rem] max-[382px]:h-[2.2rem]'>{item.product_name}</h2>
                                        <p className='text-[.8rem] mt-2 over max-[382px]:text-[.7rem] text-slate-700'>{item.product_description}</p>
                                        <span className='font-medium mt-3'>₹{Math.ceil(((item.product_price) * 100) * 0.9)}</span>
                                        <span className='ms-2 text-[.8rem] text-slate-700 line-through'>₹{Math.ceil((item.product_price) * 100)}</span>
                                        <span className='ms-4 text-[.9rem] text-green-800 font-medium max-[382px]:ms-2 '>10% off</span>
                                        <div className='max-[382px]:mt-2'><FaShoppingBasket className='inline max-[382px]:hidden' /><span className='ms-2 text-slate-500 max-[382px]:ms-0 max-[382px]:text-[.8rem]'>{item.name}</span></div>
                                        <div className="btn mt-3 flex justify-between">
                                            <span className='border border-slate-300 py-2 px-6 text-orange-600 font-medium cursor-pointer max-[382px]:px-2 max-[382px]:text-[.8rem] max-[382px]:py-1'>Add to cart</span>
                                            <select className='border border-slate-300 py-[.44rem] max-[382px]:py-1 px-1'>
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

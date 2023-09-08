import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./main_products.css"



const MainProducts = () => {

    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/main/products").then((res) => setProductsData(res.data))
    }, [])
    return (
        <>
            <div className="main_products_container bg-slate-100">
                <h2 className='font-regular text-3xl max-[768px]:text-2xl max-[382px]:text-xl'>Recently Added <span className='text-[orangered] font-medium'>Products</span></h2>
                <div className="card_container py-5 flex gap-5 flex-wrap justify-center max-[768px]:gap-3 ">
                    {
                        productsData.map((item, index) => {
                            return <div key={index} className="card card-y bg-white   border w-[16rem] px-4 py-5 rounded-[1rem] max-[768px]:w-[12rem] max-[382px]:w-[9rem]">
                                <img src={item.image} alt="products" className='w-[10rem] h-[10rem] border max-[768px]:w-[6rem] max-[768px]:h-[6rem] max-[382px]:w-[5rem] max-[382px]:h-[4rem]' />
                                <p className='pt-2 font-medium text-md py-1 max-[768px]:text-sm'>{item.name}</p>
                                <p className='text-gray-500 description text-sm max-[768px]:text-[.7rem]'>{item.description}</p>
                                <p className='py-1 max-[768px]:text-sm'>Price: <span className='font-medium'>₹{((item.price) * 100).toFixed(2)}</span></p>
                                <div className="buttons">
                                    <button className='mx-1 max-[768px]:text-sm border rounded-[2rem] text-orange-600 px-2 py-1 bg-slate-200'>Add to Cart</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MainProducts
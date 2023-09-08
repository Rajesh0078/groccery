import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import "./category.css"
import { store } from '../../../App'

const Category = () => {
    const navigate = useNavigate();

    const [categoryData, setCategorydata] = useState([])
    const { categoryValue, setCategoryValue } = useContext(store)


    useEffect(() => {
        axios.get("https://g-server-sa99.onrender.com/categories").then((res) => setCategorydata(res.data))
    }, [categoryValue])

    const clickHandler = (e) => {
        const parent = e.target.parentElement
        const value = parent.childNodes[1].innerText
        setCategoryValue(value)
        navigate(`/categories/${value}`)
    }

    return (
        <div className='category_container h-40 flex align-center'>
            <Swiper navigation={true} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} modules={[Navigation, Autoplay, Pagination]}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 3
                    },
                    '@.75': {
                        slidesPerView: 4,
                    },
                    '@1.5': {
                        slidesPerView: 5
                    }
                }} loop={true} style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "20px",
                }} className='mySwiper'>
                {
                    categoryData.map((item, index) => {
                        return <SwiperSlide key={index} className='card cursor-pointer' onClick={clickHandler}>
                            <img src={item.image} alt="haha" className='w-20 max-[428px]:w-14 max-[428px]:h-14 h-20 object-cover rounded-full' />
                            <h2 className='text-center py-2 font-medium max-[475px]:text-sm'>{item.category}</h2>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default Category

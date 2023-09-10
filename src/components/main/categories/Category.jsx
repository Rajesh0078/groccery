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
import PreLoader from '../../preloader/PreLoader'

const Category = () => {
    const navigate = useNavigate();

    const [categoryData, setCategorydata] = useState([])
    const { categoryValue, setCategoryValue } = useContext(store)


    useEffect(() => {
        axios.get("http://localhost:9000/categories").then((res) => setCategorydata(res.data))
    }, [categoryValue])

    const clickHandler = (e) => {
        const parent = e.target.parentElement
        const value = parent.childNodes[1].innerText
        setCategoryValue(value)
        navigate(`/categories/${value}`)
    }

    return (
        <div className='category_container flex align-center border-slate-300 border py-4'>
            {!categoryData ? <PreLoader /> :
                <Swiper navigation={true} modules={[Navigation, Autoplay, Pagination]}
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
                    }}
                    autoplay={{
                        delay: 2100,
                        disableOnInteraction: false,
                    }}
                    style={{
                        "--swiper-navigation-color": "#000",
                        "--swiper-navigation-size": "20px",
                    }} loop={true} className='mySwiper'>
                    {
                        categoryData.map((item, index) => {
                            return <SwiperSlide className='card cursor-pointer' key={index} onClick={clickHandler}>
                                <img src={item.image} alt="haha" className='w-20 max-[428px]:w-14 max-[428px]:h-14 h-20 object-cover rounded-full' />
                                <h2 className='text-center py-2 font-medium max-[475px]:text-sm'>{item.category}</h2>
                            </SwiperSlide>
                        })
                    }
                </Swiper>

            }
        </div>
    )
}

export default Category
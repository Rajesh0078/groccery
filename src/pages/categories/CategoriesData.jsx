import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import "./categoriesData.css"
import { store } from '../../App'
import Header from '../../components/header/Header'
import PreLoader from '../../components/preloader/PreLoader'

const CategoriesData = () => {
    const { categoryValue } = useContext(store)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.post("https://g-server-sa99.onrender.com/categories/nav", { value: categoryValue }).then((res) => setData(res.data))
    }, [categoryValue])

    return (
        <>
            <Header />
            {data.length === 0 ? <PreLoader /> :
                <div className="data_container">
                    {
                        data.map((item, index) => {
                            return <div key={index} className='card-x text-center'>
                                <h2 >{item.name}</h2>
                                <p className='text-orange-400'>₹{((item.price) * 100).toFixed(2)}</p>
                                <center><img className='rounded-full border border-black' src={item.image} alt="" /></center>
                            </div>
                        })
                    }
                </div>}
        </>
    )
}

export default CategoriesData

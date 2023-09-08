import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import "./categoriesData.css"
import { store } from '../../App'
import Header from '../../components/header/Header'

const CategoriesData = () => {
    const { categoryValue } = useContext(store)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.post("http://localhost:9000/categories/nav", { value: categoryValue }).then((res) => setData(res.data))
    }, [categoryValue])

    return (
        <>
            <Header />
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
            </div>
        </>
    )
}

export default CategoriesData
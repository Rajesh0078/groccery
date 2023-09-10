import React, { useEffect, useState } from 'react'
import axios from "axios"

const Categories = () => {

    const [catData, setCatData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/categories").then((res) => setCatData(res.data))
    }, [])

    return (
        <div className='w-[100%] text-center py-5 border border-orange-400'>{catData.map((item, index) => {
            return <p key={index} className='mx-6'>{item.category}</p>
        })}</div>
    )
}

export default Categories
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import "./main.css"
import Category from './categories/Category'
import Offers from './categories/offers/Offers'
import MainProducts from './main_products/Main_Products'
import Footer from '../footer/Footer'

const Main = () => {

    const [catSearch, setCatSearch] = useState("")
    const [locSearch, setLocSearch] = useState("")
    const [catData, setCatData] = useState([])
    const [matchData, setMatchdata] = useState([])
    const [locationData, setLocationdata] = useState([])
    const [matchedLoc, setMatchedLoc] = useState([])

    useEffect(() => {
        axios.post("https://g-server-sa99.onrender.com/category").then((res) => {
            let categ = res.data
            let fin = Array(...new Set(categ.map((i) => i.category)))
            setCatData(fin)
        })

        axios.get("https://g-server-sa99.onrender.com/location").then((res) => setLocationdata(res.data))

    }, [catSearch])

    const categoryHandler = (e) => {
        setCatSearch(e.target.value.trim())
        let match = catData.filter((o) => o.toUpperCase().includes(e.target.value.toUpperCase().trim()))
        setMatchdata(match)
        setLocSearch("")
    }

    const locationHandler = (e) => {
        setLocSearch(e.target.value.trim())
        let matchedLocation = locationData.filter((item) => item.toUpperCase().includes(e.target.value.toUpperCase().trim()))
        setMatchedLoc(matchedLocation)
        setCatSearch("")
    }

    return (
        <>
            <div className='main_container p-5'>
                <h2 className="title text-8xl max-[428px]:text-5xl">grosso store</h2>
                <p className='mt-10 text-xl py-2 max-[768px]:text-center max-[428px]:text-lg'>Our grocery is always there for you. You’ll grab more than what’s on your list.</p>
                <p className='text-lg py-3 max-[428px]:text-sm'>Happy shopping...!!</p>
                <form className='flex gap-5 max-[640px]:flex-col max-[640px]:gap-0'>
                    <div className="side z-2 max-[768px]:w-48 max-[640px]:w-80 ">
                        <input className='px-2 mt-4 py-1 w-80' value={catSearch} type="search" name='search' placeholder='Search for categories' onChange={categoryHandler} autoComplete='off' />
                        {
                            catSearch &&
                            <div className="category_content category_content-x z-2 w-80 max-[768px]:w-48 max-[640px]:w-80 h-60 bg-slate-50 mt-3 ">
                                {matchData.map((item, index) => {
                                    return <Link key={index} className='cursor-pointer'>{item}</Link>
                                })}
                            </div>
                        }
                    </div>
                    <div className="side-x w-80 max-[768px]:w-48 z-1 max-[640px]:w-80">
                        <input className='px-2 mt-4 py-1 z-1 w-80' value={locSearch} type="search" name='search' placeholder='Search for locations in AP' autoComplete='off' onChange={locationHandler} />
                        {
                            locSearch &&
                            <div className="category_content category_content-x w-80 max-[768px]:w-48 max-[640px]:w-80 h-60 bg-slate-50 mt-3 ">
                                {matchedLoc.map((item, index) => {
                                    return <p key={index}>{item}</p>
                                })}
                            </div>
                        }
                    </div>
                </form>
            </div>
            <Category />
            <Offers />
            <MainProducts />
            <Footer />
        </>
    )
}

export default Main

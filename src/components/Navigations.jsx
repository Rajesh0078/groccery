import React, { useContext } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/home/Home'
import Products from "../pages/products/Products"
import Offers from "../pages/offers/Offers"
import Contact from "../pages/contact/Contact"
import About from "../pages/about/About"
import { store } from '../App'
import CategoriesData from '../pages/categories/CategoriesData'

const Navigations = () => {
    const { categoryValue } = useContext(store)
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path={`/categories/${categoryValue}`} element={<CategoriesData />} />
            <Route path='*' element={"not found"} />
        </Routes>
    )
}

export default Navigations
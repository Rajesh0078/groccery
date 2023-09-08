import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-600'>
                <div className="site_links py-6 px-[4rem] text-gray-100 max-[382px]:px-[1rem]">
                    <h2 className='pb-2 text-orange-400'>SITE LINKS</h2>
                    <div className="container flex gap-[10rem] max-[382px]:gap-[2rem] max-[382px]:text-[.8rem] pb-5">
                        <div className="first flex flex-col max-[382px]:text-[.8rem]">
                            <p>Contact Us</p>
                            <p>About Us</p>
                            <p>Our Top Products</p>
                            <p>Our Exciting Offers</p>
                        </div>
                        <div className="second flex flex-col">
                            <p>Enroll for store</p>
                            <p>Business Deal</p>
                            <p>Store Enrollement</p>
                            <p>Expand Us</p>
                        </div>
                        <div className="third flex flex-col">
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                            <p>Our store</p>
                        </div>
                    </div>
                    <hr />
                    <center><div className="branding flex gap-10 justify-center flex-wrap pt-5 w-[45rem] max-[382px]:w-[20rem] max-[382px]:gap-5">
                        <img src="https://img.freepik.com/free-vector/supermarket-logo-with-groceries_23-2148470294.jpg" alt="" />
                        <img src="https://media.istockphoto.com/id/1205419959/vector/vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector.jpg?s=612x612&w=0&k=20&c=HgCTmq-4R0-MvKIGrSFJcifqqoJIcducRZBVTO4V5TU=" alt="" />
                        <img src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg" alt="" />
                        <img src="https://images-platform.99static.com//yDsBFa65oy7wov0R7njZMAp7WiM=/247x388:972x1113/fit-in/500x500/99designs-contests-attachments/134/134129/attachment_134129261" alt="" />
                        <img src="https://st5.depositphotos.com/18829534/65479/v/450/depositphotos_654793728-stock-illustration-food-delivery-shopping-cart-logo.jpg" alt="" />
                        <img src="https://i.pinimg.com/originals/52/2a/7e/522a7e57d16d86e8193df73e674d1f7a.png" alt="" />
                        <img src="https://img.freepik.com/premium-vector/supermarket-logo-cyrcle-fresh-logo-green-store-with-leafes_236275-451.jpg" alt="" />
                        <img src="https://marketplace.canva.com/EAFeUFh1OK8/1/0/1600w/canva-green-elegant-simple-organic-grocery-logo-kG9dFNgMldo.jpg" alt="" />
                    </div>
                    </center>
                </div>
                <div className="bottom_container h-30 py-5 bg-orange-500 px-[4rem] max-[382px]:px-[1rem] max-[382px]:py-4">
                    <div className="logo ">
                        <Link to="/" className='text-slate-950 text-4xl max-[382px]:text-2xl '>Grosso store</Link>
                    </div>
                    <div className="copy_right max-[382px]:text-sm ">
                        <p className='mx-5 max-[382px]:hidden'>|</p>
                        <p className='font-medium text-lg max-[382px]:text-sm max-[382px]:pt-3'>Copy Rights reserved by RAJESH</p>
                        <p className='mx-5 max-[382px]:hidden'>|</p>
                    </div>
                    <div className="mail_us">
                        <p className='max-[382px]:text-sm max-[382px]:text-center'>Recieve the latest news & Exclusive Offers by</p>
                        <div className="btn py-2 max-[382px]:text-[.8rem]">
                            <center>
                                <button className='border px-5 mx-1 bg-slate-300 rounded-[.3rem]'>Text</button>
                                <button className='border px-5 mx-1 bg-slate-300 rounded-[.3rem]'>Email</button>
                            </center>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
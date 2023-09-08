import React from 'react'
import { } from "react-icons/ci"
import "./offers.css"

const Offers = () => {
    return (
        <>
            <div className="offers_container bg-[#f7f7f7]  ">
                <p className='text-[.8rem] p-3 description-x'>Whether you work from home or office or other workplaces, daily grocery items are a requisite for everybody. Regardless of the size of the family or where you live, one can easily browse for the required food or other daily use products and have them brought to your home. Explore the variety of products, whether oils or foodgrains, from the online stock and choose the quantity required. You can save the time otherwise lost in waiting in lengthy queues for billing and payments by easily adding the chosen items to your cart online. Select the required date for delivery and pay with a suitable payment option. This will help you receive the items whenever you need them and in the available quantity. Essentials needed every day, like spices, daals, sugar, coffee powder, salt, etc., can be easily shopped online and delivered to your home. Other items like cleaning liquids, shower gels, fabric softeners, toothpaste, etc., can also be bought online. Buy grocery and more from brands such as Kellogg’s, Tata Gold, Parle G, Lays, etc. Order the online grocery comfortably from home for timely doorstep delivery. You may also place an order for the comfort and convenience of your loved ones who cannot move out of the house and shop. The information you are reading has been last updated on 08-Sep-23.</p>
                <div className="title-x  py-5 ">
                    <div className="content max-[428px]:w-[20rem] flex justify-center align-center max-[468px]:gap-3 gap-7 py-2 bg-[#fff] w-[40rem] rounded-[2rem] mx-auto">
                        <img width="40" className='opacity-50 max-[428px]:w-[1rem]' height="30" src="https://img.icons8.com/ios/50/trillium.png" alt="trillium" />
                        <h2 className='font-semibold text-4xl max-[428px]:text-lg'>EXCLUSIVE <span className='text-[orangered]'>OFFERS ZONE</span></h2>
                        <img className='opacity-50 max-[428px]:w-[1rem]' height="30" src="https://img.icons8.com/ios/50/trillium.png" alt="trillium" />
                    </div>

                </div>
                <div className="offers_content ">
                    <img src="/images/grosso_offer.jpg" alt="" className='max-[428px]:h-[10rem] h-[25rem]' />
                    <div className="first flex">
                        <img className='max-[428px]:h-[5rem] h-[10rem]' src="https://blogger.googleusercontent.com/img/a/AVvXsEgYfPkQhIhftLH0uCFDB8uQUzSR6yl7DWtRdmdONETTZkcHr0u5atbrx5yOBPw0iBgpNWhELFTjHCdp1BZg_uVkApVFoaQS7bC20bwp38SaTaPG8hlz_Q78V2F9JlY-HD_BEg3pjMLKRpj3J4q05PBZiN_voeMBvWOOXrETJTmfnf__BoyW64mzLv3h=s16000" alt="" />
                        <img className='max-[428px]:h-[5rem] h-[10rem]' src="https://www.ucaindia.com/ucacard/wp-content/uploads/2019/05/Monika-Icecream.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers
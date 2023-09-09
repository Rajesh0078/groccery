import "./preloader.css"
import React from 'react'

const PreLoader = () => {
    return (
        <div className="">
            <div className="loader_container flex h-[100vh] justify-center items-center flex-col gap-4">
                <div className="box_content flex gap-4">
                    <div className="box box-1"></div>
                    <div className="box box-2"></div>
                    <div className="box box-3"></div>
                </div>
                <div className="box_content flex gap-4">
                    <div className="box box-4"></div>
                    <div className="box box-5"></div>
                    <div className="box box-6"></div>
                </div>
                <div className="box_content flex gap-4">
                    <div className="box box-7"></div>
                    <div className="box box-8"></div>
                    <div className="box box-9"></div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader
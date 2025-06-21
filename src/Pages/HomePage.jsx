import React, { useContext, useEffect } from 'react'
import Navbar from '../FrontendComponents/Navbar'
import Footer from '../FrontendComponents/Footer'
import Categories from '../FrontendComponents/Categories'
import NewArrivalCard from '../FrontendComponents/NewArrivalCard';
import Slider from '../FrontendComponents/Slider'
import AllItem from './AllItem';
import homeimage from "../assets/homeimage.webp"
import Explore from '../FrontendComponents/Explore';
// import Login from './Login';
import { dataContext } from '../Context/PageContext'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import Review from '../FrontendComponents/Review';




const HomePage = () => {
    let { input, cateSelect } = useContext(dataContext)

    return (
        <div>
            <header className=''><Navbar /></header>


            {input.trim() === "" && !cateSelect && <Categories />}

            <div className="w-full">
                {input.trim() !== "" || cateSelect ? <AllItem /> : <Explore />}
            </div>


            <div>
                <img src={homeimage} alt="" />
            </div>

            {/* New Arrival Section */}
            <section className='w-full h-auto mt-4 mb-6'>
                <div className='mt-24 flex items-center justify-center gap-2'>
                    <p className='w-8 h-[2px] bg-black'></p>
                    <p className='prata-regular md:text-5xl text-3xl text-gray-600 font-semibold'>New Arrivals</p>
                </div>
                <NewArrivalCard />

            </section>

            {/* Image Slider */}
            <div className='my-6'>
                <Slider />
            </div>

            {/* Review Section */}
            <Review />


        </div>
    )
}

export default HomePage

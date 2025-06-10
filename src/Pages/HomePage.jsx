import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
import NewArrivalCard from '../Components/NewArrivalCard';
import Slider from '../Components/Slider'
import AllItem from './AllItem';
import homeimage from "../assets/homeimage.webp"
import Explore from '../Components/Explore';
import Login from '../Components/Login';
import { dataContext } from '../Context/UserContext'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import Review from '../Components/Review';




const HomePage = () => {
    let { input, cateSelect } = useContext(dataContext)

    return (
        <div>
            <header className=''><Header /></header>
            {/* SignIn */}
            <Login />

            {/* Categories Section */}
            <Categories />
            <div className='w-full'>
                {input || cateSelect ? <AllItem /> : <Explore />}
            </div>

            <div>
                <img src={homeimage} alt="" />
            </div>

            {/* New Arrival Section */}
            <section className='w-full h-auto bg-[#FAFFCA] my-4'>
                <h1 className='flex justify-center md:text-5xl text-3xl my-4 pt-5 font-semibold'>NEW ARRIVALS</h1>
                <div className='w-full flex flex-wrap justify-center md:mx-5 md:gap-10 gap-3'>
                    <NewArrivalCard />
                </div>
            </section>

            {/* Image Slider */}
            <div className='my-6'>
                <Slider />
            </div>

            {/* Review Section */}
            <Review />

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default HomePage

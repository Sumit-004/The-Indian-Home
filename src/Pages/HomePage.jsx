import React, { useContext, useEffect } from 'react'
import Navbar from '../FrontendComponents/Navbar'
import Categories from '../FrontendComponents/Categories'
import NewArrivalCard from '../FrontendComponents/NewArrivalCard';
import Slider from '../FrontendComponents/Slider'
import AllItem from './AllItem';
import homeimage from "../assets/homeimage.webp"
import homeimage2 from '../assets/homeimage2.jpg'
import Explore from '../FrontendComponents/Explore';
import { dataContext } from '../Context/PageContext'
import { useState } from 'react'
import Review from '../FrontendComponents/Review';


const HomePage = () => {
    let { input, category, showDropdown, setShowDropdown } = useContext(dataContext)

    return (
        <div>
            <header className=''><Navbar /></header>


            {input.trim() === "" && !category && <Categories />}


            <div className="w-full">
                {input.trim() !== "" || category ? <AllItem /> : <Explore />}
            </div>
            <div className='md:mt-8 mt-2 mx-3'>
                <img src={homeimage2} alt="" />
            </div>



            {/* New Arrival Section */}
            <section className='w-full h-auto mb-6 bg-sky-100'>
                <div className='md:mt-12 mt-8 mb-2 flex items-center justify-center gap-2'>
                    <p className='w-8 h-[2px] bg-black'></p>
                    <p className='prata-regular md:text-5xl text-3xl text-gray-600 font-semibold'><span className='text-black'>New</span> Arrivals</p>
                </div>
                <NewArrivalCard />

            </section>
            <div className='md:mt-8 mt-2'>
                <img src={homeimage} alt="" />
            </div>

            {/* Image Slider */}
            <div className='md:my-6 my-6'>
                <Slider />
            </div>

            {/* Review Section */}
            <Review />


        </div>
    )
}

export default HomePage

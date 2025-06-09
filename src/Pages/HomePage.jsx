import React, { useContext, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
import NewArrivalCard from '../Components/NewArrivalCard';
import ImageSlider from '../Components/ImageSlider'
import Slider from '../Components/Slider'
import AllItem from './AllItem';
import homeimage from "../assets/homeimage.webp"
import Explore from '../Components/Explore';
import { dataContext } from '../Context/UserContext'
import { useSelector } from 'react-redux';
import { items } from '../items';
import { useState } from 'react'
import Review from '../Components/Review'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";




const HomePage = () => {
    let { showSignIn, setShowSignIn, showRegister, setShowRegister, input, cateSelect } = useContext(dataContext)

    useEffect(() => {
        if (showSignIn || showRegister) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showSignIn, showRegister]);



    return (
        <div>
            <header className=''><Header /></header>
            {/* SignIn */}
            <div className={`${showSignIn ? 'flex justify-center items-start absolute overflow-hidden w-full h-full bg-transparent backdrop-blur-[20px] transition-all' : ""}`}>

                {showSignIn && (<motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, }}
                    className={`relative top-8 h-auto w-[400px] bg-[#FBDB93] flex flex-col gap-6 py-12 px-6 shadow-lg  ${showSignIn ? "translate-y-3" : "hidden"}`}>
                    <h1 className='text-3xl font-bold flex items-center justify-center'>Log In</h1>
                    <button className='fixed top-0 right-0 bg-[#FE5D26] p-2 cursor-pointer' onClick={() => { setShowSignIn(false) }}><RxCross2 /></button>
                        <div className='flex flex-col gap-4'>
                            <div className='flex text-[17px] gap-2 items-center justify-center'><MdOutlineEmail className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600' required type="email" placeholder='xyz123@gmail.com' /></div>
                            <div className='flex text-[17px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600' required type="password" placeholder='######' /></div>
                            <span className='text-blue-800 ml-7 cursor-pointer underline hover:text-black'>Forgot Your Password?</span>
                        </div>
                        <button className='p-2 bg-[#0E2148] mx-6 text-white cursor-pointer hover:bg-blue-900 transition-all duration-300'>Sign In</button>
                        <p className=' ml-7'>Don't have an Account?<span className='text-blue-800 cursor-pointer underline hover:text-black' onClick={() => { setShowRegister(true), setShowSignIn(false) }}>Register</span> </p>
                </motion.div>)}


            </div>
            {/* Register */}
            <div className={`${showRegister ? ' flex justify-center items-start absolute w-full h-full bg-transparent backdrop-blur-[20px]' : ""}`}>

                {showRegister && (<motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.5, }}
                    className={`relative top-8 h-auto w-[400px] bg-[#FBDB93] flex flex-col gap-5 py-10 px-6 shadow-lg  ${showRegister ? "translate-y-3" : "hidden"}`}>
                    <h1 className='text-3xl font-bold flex items-center justify-center'>Register</h1>
                    <button className='fixed top-0 right-0 bg-[#FE5D26] p-2 cursor-pointer' onClick={() => { setShowRegister(false) }}><RxCross2 /></button>
                    <div className='flex flex-col gap-2'>
                        <div className='flex text-[17px] gap-2 items-center justify-center'><FaRegUser className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="text" placeholder='Enter full name' /></div>
                        <div className='flex text-[17px] gap-2 items-center justify-center'><MdOutlineEmail className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="email" placeholder='xyz123@gmail.com' /></div>
                        <div className='flex text-[17px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="password" placeholder='Enter password' /></div>
                        <div className='flex text-[17px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="password" placeholder='Re-enter password' /></div>
                        <span className='ml-7 flex gap-1'><input type="checkbox" name="" id="" />Remember Me</span>
                    </div>
                    <button className='p-2 bg-[#0E2148] mx-6 text-white cursor-pointer hover:bg-blue-900 transition-all duration-300'>Sign Up</button>
                    <p className=' ml-7'>Already have an Account?<span className='text-blue-800 cursor-pointer underline hover:text-black' onClick={() => { setShowSignIn(true), setShowRegister(false) }}>Log In</span> </p>
                </motion.div>)}
            </div>

            {/* Categories Section */}
            <Categories />
            {input || cateSelect ? <AllItem /> : <Explore />}




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
            {/* <ImageSlider /> */}
            <div className='my-6'>
                <Slider />
            </div>
            <Review />
            {/* Footer */}
            <Footer />

        </div>
    )
}

export default HomePage

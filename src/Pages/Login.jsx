import React, { useContext, useEffect } from 'react'
import Img from '../assets/log.jpg'
import { dataContext } from '../Context/UserContext'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const Login = () => {

    let { showSignIn, setShowSignIn, showRegister, setShowRegister } = useContext(dataContext)


    return (
        <div id='login' className=' flex md:flex-row flex-col h-screen'>
            <div className='md:my-10 my-5 md:h-full h-auto md:w-[40%] w-full md:border-r-4 flex flex-col md:justify-center justify-start items-center' >
                <h1 className='text-2xl font-bold'><span className='text-red-700 text-3xl'>Hello 🖐️</span> Log Here</h1>
                <img src={Img} alt="" className='md:h-[400px] h-[200px] w-[200px] md:w-[400px] object-cover' />
            </div>
            {/* SignIn */}
            <div className='md:h-full h-auto md:w-[60%] w-full flex justify-center md:items-center items-start mt-10'>
                {showSignIn && (<motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.7, }}
                    className={`relative h-auto md:w-[400px] w-[90%] bg-[#3674B5] flex flex-col md:gap-6 gap-3 md:py-12 py-7 px-6 shadow-lg rounded-lg`}>
                    <h1 className='md:text-3xl text-2xl font-bold flex items-center justify-center'>Log In</h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><MdOutlineEmail className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600' required type="email" placeholder='xyz123@gmail.com' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600' required type="password" placeholder='######' /></div>
                        <span className='text-blue-300 md:text-[17px] text-[14px] ml-7 cursor-pointer underline hover:text-black transition-all duration-300'>Forgot Your Password?</span>
                    </div>
                    <button className='p-2 bg-[#0E2148] mx-6 text-white cursor-pointer hover:bg-blue-900 transition-all duration-300'>Sign In</button>
                    <p className=' md:text-[17px] text-[14px] ml-7'>Don't have an Account? <span className='text-blue-300 cursor-pointer underline hover:text-black transition-all duration-300' onClick={() => { setShowRegister(true), setShowSignIn(false) }}>Register</span> </p>
                </motion.div>)}



                {/* Register */}

                {showRegister && (<motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={{ duration: 0.5, }}
                    className={`relative h-auto md:w-[400px] w-[90%] bg-[#3674B5] flex flex-col md:gap-6 gap-3 md:py-12 py-7 px-6 shadow-lg rounded-lg`}>
                    <h1 className='md:text-3xl text-2xl font-bold flex items-center justify-center'>Register</h1>
                    <div className='flex flex-col gap-2'>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><FaRegUser className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="text" placeholder='Enter full name' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><MdOutlineEmail className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="email" placeholder='xyz123@gmail.com' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="password" placeholder='Enter password' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="password" placeholder='Re-enter password' /></div>
                        <span className='ml-7 md:text-[17px] text-[14px] flex gap-1'><input type="checkbox" name="" id="" />Remember Me</span>
                    </div>
                    <button className='p-2 bg-[#0E2148] mx-6 text-white cursor-pointer hover:bg-blue-900 transition-all duration-300'>Sign Up</button>
                    <p className=' md:text-[17px] text-[14px] ml-7'>Already have an Account? <span className='text-blue-300 cursor-pointer underline hover:text-black transition-all duration-300' onClick={() => { setShowSignIn(true), setShowRegister(false) }}>Log In</span> </p>
                </motion.div>)}
            </div>
        </div>

    )
}

export default Login

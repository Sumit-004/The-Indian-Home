import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Context/UserContext'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const Login = () => {

    let { showSignIn, setShowSignIn, showRegister, setShowRegister } = useContext(dataContext)

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
            {/* SignIn */}
            <div className={`${showSignIn ? 'fixed inset-0 flex justify-center items-center z-50 bg-transparent backdrop-blur-[20px]' : ''}`}>

                {showSignIn && (<motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, }}
                    className={`relative h-auto md:w-[400px] w-[90%] bg-[#FBDB93] flex flex-col md:gap-6 gap-3 md:py-12 py-7 px-6 shadow-lg  ${showSignIn ? "translate-y-3" : "hidden"}`}>
                    <h1 className='md:text-3xl text-2xl font-bold flex items-center justify-center'>Log In</h1>
                    <button className='fixed top-0 right-0 bg-[#FE5D26] p-2 cursor-pointer' onClick={() => { setShowSignIn(false) }}><RxCross2 /></button>
                    <div className='flex flex-col gap-4'>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><MdOutlineEmail className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600' required type="email" placeholder='xyz123@gmail.com' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600' required type="password" placeholder='######' /></div>
                        <span className='text-blue-800 md:text-[17px] text-[14px] ml-7 cursor-pointer underline hover:text-black'>Forgot Your Password?</span>
                    </div>
                    <button className='p-2 bg-[#0E2148] mx-6 text-white cursor-pointer hover:bg-blue-900 transition-all duration-300'>Sign In</button>
                    <p className=' md:text-[17px] text-[14px] ml-7'>Don't have an Account?<span className='text-blue-800 cursor-pointer underline hover:text-black' onClick={() => { setShowRegister(true), setShowSignIn(false) }}>Register</span> </p>
                </motion.div>)}


            </div>
            {/* Register */}
            <div className={`${showRegister ? 'fixed inset-0 flex justify-center items-center z-50 bg-transparent backdrop-blur-[20px]' : ''}`}>

                {showRegister && (<motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.5, }}
                    className={`relative h-auto md:w-[400px] w-[90%] bg-[#FBDB93] flex flex-col md:gap-6 gap-3 md:py-10 py-7 px-6 shadow-lg  ${showRegister ? "translate-y-3" : "hidden"}`}>
                    <h1 className='md:text-3xl text-2xl font-bold flex items-center justify-center'>Register</h1>
                    <button className='fixed top-0 right-0 bg-[#FE5D26] p-2 cursor-pointer' onClick={() => { setShowRegister(false) }}><RxCross2 /></button>
                    <div className='flex flex-col gap-2'>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><FaRegUser className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="text" placeholder='Enter full name' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><MdOutlineEmail className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="email" placeholder='xyz123@gmail.com' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="password" placeholder='Enter password' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' required type="password" placeholder='Re-enter password' /></div>
                        <span className='ml-7 md:text-[17px] text-[14px] flex gap-1'><input type="checkbox" name="" id="" />Remember Me</span>
                    </div>
                    <button className='p-2 bg-[#0E2148] mx-6 text-white cursor-pointer hover:bg-blue-900 transition-all duration-300'>Sign Up</button>
                    <p className=' md:text-[17px] text-[14px] ml-7'>Already have an Account?<span className='text-blue-800 cursor-pointer underline hover:text-black' onClick={() => { setShowSignIn(true), setShowRegister(false) }}>Log In</span> </p>
                </motion.div>)}
            </div>

        </div>
    )
}

export default Login

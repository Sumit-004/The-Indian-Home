import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { dataContext } from '../../Context/PageContext'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";

const Signup = () => {
    const { login } = useAuth();
    const navigate = useNavigate(); 

    let { setShowSignIn, setShowRegister } = useContext(dataContext)
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", form);
            alert("Sign up successful");
            login(res.data.user);
            localStorage.setItem("userId", res.data.user._id);
            navigate("/");  

        } catch (err) {
            alert(err.response.data.error);
        }
    };


    return (
        <>
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.5, }}
                className={`relative h-auto md:w-[400px] w-[90%] bg-[#3674B5] flex flex-col md:gap-6 gap-3 md:py-12 py-7 px-6 shadow-lg rounded-lg`}>
                <h1 className='md:text-3xl text-2xl font-bold flex items-center justify-center'>Register</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><FaRegUser className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' onChange={handleChange} required name='name' type="text" placeholder='Enter full name' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><MdOutlineEmail className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' onChange={handleChange} required name='email' type="email" placeholder='xyz123@gmail.com' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' onChange={handleChange} required name='password' type="password" placeholder='Enter password' /></div>
                        <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700' onChange={handleChange} required name='password' type="password" placeholder='Re-enter password' /></div>
                        <span className='ml-7 md:text-[17px] text-[14px] flex gap-1'><input type="checkbox" name="" id="" />Remember Me</span>
                    </div>
                    <button className='p-2 bg-[#0E2148] mx-6 text-white cursor-pointer hover:bg-blue-900 transition-all duration-300' type='submit'>Sign Up</button>
                </form>
                <p className=' md:text-[17px] text-[14px] ml-7'>Already have an Account? <span className='text-blue-300 cursor-pointer underline hover:text-black transition-all duration-300' onClick={() => { setShowSignIn(true), setShowRegister(false) }}>Log In</span> </p>
            </motion.div>

        </>
    )
}

export default Signup;

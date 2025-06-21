import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Img from '../../assets/log.jpg'
import { dataContext } from '../../Context/PageContext'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import SignUp from '../Login/Signup';
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

import { AnimatePresence, motion } from "framer-motion";

const Signin = () => {
    const navigate = useNavigate(); 
    const { login } = useAuth();
    let { showSignIn, setShowSignIn, showRegister, setShowRegister } = useContext(dataContext)
    const [form, setForm] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", form);
            alert("Login successful");
            localStorage.setItem("userId", res.data.user._id);
            localStorage.setItem("token", res.data.token);
            login(res.data.user);
            navigate("/");

        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <div id='login' className=' flex md:flex-row flex-col h-screen'>
            <div className='md:my-10 my-5 md:h-full h-auto md:w-[40%] w-full md:border-r-4 flex flex-col md:justify-center justify-start items-center' >
                <h1 className='text-2xl font-bold'><span className='text-red-700 text-3xl'>Hello 🖐️</span> Log Here</h1>
                <img src={Img} alt="" className='md:h-[400px] h-[200px] w-[200px] md:w-[400px] object-cover' />
            </div>
            {/* SignIn */}
            <div className='md:h-full h-auto md:w-[60%] w-full flex justify-center md:items-center items-start mt-10 '>
                {showSignIn && (<motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.7, }}
                    className={`relative h-auto md:w-[400px] w-[90%] bg-[#3674B5] flex flex-col md:gap-6 gap-3 md:py-12 py-7 px-6 shadow-lg rounded-lg`}>
                    <h1 className='md:text-3xl text-2xl font-bold flex items-center justify-center'>Log In</h1>
                    <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><MdOutlineEmail className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600' onChange={handleChange} required name='email' type="email" placeholder='xyz123@gmail.com' /></div>
                            <div className='flex md:text-[17px] text-[14px] gap-2 items-center justify-center'><RiLockPasswordLine className='font-bold text-2xl' /><input className='text-white w-full h-8 p-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600' onChange={handleChange} required name='password' type="password" placeholder='######' /></div>
                            <span className='text-blue-300 md:text-[17px] text-[14px] ml-7 cursor-pointer underline hover:text-black transition-all duration-300'>Forgot Your Password?</span>
                        </div>
                        <button className='p-2 bg-[#0E2148] mx-6 text-white cursor-pointer hover:bg-blue-900 transition-all duration-300' type="submit">Sign In</button>
                    </form>
                    <p className=' md:text-[17px] text-[14px] ml-7'>Don't have an Account? <span className='text-blue-300 cursor-pointer underline hover:text-black transition-all duration-300' onClick={() => { setShowRegister(true), setShowSignIn(false) }}>Register</span> </p>
                </motion.div>)}

                {/* Register */}
                {showRegister && <SignUp />}
            </div>
        </div>

    )
}

export default Signin;

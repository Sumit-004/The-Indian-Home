import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Img from '../../assets/log.avif';
import { dataContext } from '../../Context/PageContext';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import SignUp from '../Login/Signup';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion";

const Signin = () => {
    const { showSignIn, setShowSignIn, showRegister, setShowRegister, token, setToken, navigate, backendUrl } = useContext(dataContext);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(backendUrl + '/api/user/login', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userId', response.data.user._id)
                setUser(res.data.user);
                toast.success('Logged in Successfull')
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    return (
        <div className="min-h-screen w-full flex md:flex-row flex-col bg-gradient-to-r from-zinc-200 via-slate-200 to-zinc-200">
            {/* Left Side */}
            <div className="hidden md:block md:w-1/2 w-full px-6 py-10">
                <div className='h-full w-full flex items-center'>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                        <span className="text-blue-800">Hello </span>, Log In Here
                    </h1>
                    <img src={Img} alt="Login Visual" className="md:h-[400px] h-[250px] w-auto rounded-xl shadow-lg object-cover" />
                </div>
            </div>

            {/* Right Side - Login/Register */}
            <div className="md:w-1/2 w-full h-auto mt-26 flex justify-center items-center py-10 relative">
                {showSignIn && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="backdrop-blur-md bg-white/30 shadow-xl rounded-xl w-[90%] max-w-md p-8 md:p-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900 mb-6">Log In</h2>
                        <form onSubmit={onSubmitHandler} className="space-y-5">
                            <div className="flex items-center border-b border-gray-400 focus-within:border-blue-500 px-2 py-1">
                                <MdOutlineEmail className="text-xl text-blue-800" />
                                <input
                                    className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                                    type="email"
                                    value={email}
                                    required
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center border-b border-gray-400 focus-within:border-blue-500 px-2 py-1">
                                <RiLockPasswordLine className="text-xl text-blue-800" />
                                <input
                                    className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                                    type="password"
                                    value={password}
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="text-right text-sm text-blue-700 hover:text-blue-900 cursor-pointer transition-all duration-200">
                                Forgot your password?
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 cursor-pointer transition duration-300"
                            >
                                Log In
                            </button>
                        </form>
                        <p className="text-center text-sm mt-4 text-gray-700">
                            Don't have an account?{" "}
                            <span
                                onClick={() => {
                                    setShowRegister(true);
                                    setShowSignIn(false);
                                }}
                                className="text-blue-600 cursor-pointer hover:underline"
                            >
                                Register
                            </span>
                        </p>
                    </motion.div>
                )}

                {showRegister && <SignUp />}
            </div>
        </div>
    );
};

export default Signin;

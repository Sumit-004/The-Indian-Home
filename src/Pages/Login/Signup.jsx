import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { dataContext } from '../../Context/PageContext';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion";

const Signup = () => {
    const { setShowSignIn, setShowRegister, token, setToken, navigate, backendUrl } = useContext(dataContext);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Password do not match!");
            return;
        } else {
            setError("");
        }

        try {
            const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token)
                toast.success('User created Successfull')
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }



    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-md bg-white/30 shadow-xl rounded-xl w-[90%] max-w-md p-8 md:p-10"
        >
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900 mb-6">Register</h2>

            {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded text-sm mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={onSubmitHandler} className="space-y-5">
                <div className="flex items-center border-b border-gray-400 focus-within:border-blue-500 px-2 py-1">
                    <FaRegUser className="text-xl text-blue-800" />
                    <input
                        className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                        type="text"
                        value={name}
                        required
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}

                    />
                </div>
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
                <div className="flex items-center border-b border-gray-400 focus-within:border-blue-500 px-2 py-1">
                    <RiLockPasswordLine className="text-xl text-blue-800" />
                    <input
                        className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                        type="password"
                        value={confirmPassword}
                        required
                        placeholder="Re-enter Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="text-sm text-gray-700 flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="accent-blue-600" />
                    <label htmlFor="remember">Remember me</label>
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition duration-300"
                >
                    Register
                </button>
            </form>

            <p className="text-center text-sm mt-4 text-gray-700">
                Already have an account?{" "}
                <span
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => {
                        setShowSignIn(true);
                        setShowRegister(false);
                    }}
                >
                    Log In
                </span>
            </p>
        </motion.div>
    );
};

export default Signup;

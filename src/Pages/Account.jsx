import React from 'react'
import { CgProfile } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const Account = () => {
    const navigate = useNavigate();
    const openProfile = () => navigate('/Profile');


    return (
        <>
            <div className='flex flex-col gap-6 items-center justify-center w-full h-screen'>
                <h1 className='text-4xl font-semibold'>Your Account</h1>
                <div className='w-[80%] text-2xl bg-white shadow-2xl p-15 rounded-lg'>
                    <div className='flex items-center justify-between mb-5 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer p-4 rounded-lg' onClick={openProfile}>
                        <span className='flex items-center gap-4'><CgProfile />Your Profile</span>
                        <FaAngleRight />
                    </div>
                    <div className='flex items-center justify-between mb-5 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer p-4 rounded-lg'>
                        <span className='flex items-center gap-4'><BsBoxSeam />Orders</span>
                        <FaAngleRight />
                    </div>
                    <div className='flex items-center justify-between mb-5 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer p-4 rounded-lg'>
                        <span className='flex items-center gap-4'><RiCustomerService2Fill />Customer Service</span>
                        <FaAngleRight />
                    </div>
                    <div className='flex items-center justify-between mb-5 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer p-4 rounded-lg'>
                        <span className='flex items-center gap-4'><CgProfile />Service</span>
                        <FaAngleRight />
                    </div>
                </div>
                <div className='w-[80%] flex justify-end'>
                    <button
                        type="button"
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
                    >
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Account

import React from 'react'
import { CgProfile } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from "../Context/AuthContext";

const Account = () => {
    const navigate = useNavigate();
    const openProfile = () => navigate('/Profile');
    const { logout } = useAuth();

    const handleLogoutAndRedirect = async () => {
        try {
            await logout(); 
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    return (
        <>
            <div className='flex flex-col gap-6 items-center justify-center w-full h-screen bg-[#FFF2E0]'>
                <h1 className='md:text-4xl text-3xl font-semibold'>Your Account</h1>
                <div className='w-[80%] text-2xl bg-[#9BC09C] shadow-2xl md:p-15 p-5 rounded-lg'>
                    <div className='flex items-center justify-between md:mb-5 mb-2 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer p-4 rounded-lg' onClick={openProfile}>
                        <span className='flex items-center gap-4 md:text-xl text-[15px]'><CgProfile/>Your Profile</span>
                        <FaAngleRight className=' md:text-xl text-[15px]'/>
                    </div>
                    <div className='flex items-center justify-between md:mb-5 mb-2 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer p-4 rounded-lg'>
                        <span className='flex items-center gap-4 md:text-xl text-[15px]'><BsBoxSeam />Orders</span>
                        <FaAngleRight className=' md:text-xl text-[15px]' />
                    </div>
                    <div className='flex items-center justify-between md:mb-5 mb-2 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer p-4 rounded-lg'>
                        <span className='flex items-center gap-4 md:text-xl text-[15px]'><RiCustomerService2Fill />Customer Service</span>
                        <FaAngleRight className=' md:text-xl text-[15px]' />
                    </div>
                    <div className='flex items-center justify-between md:mb-5 mb-2 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer p-4 rounded-lg'>
                        <span className='flex items-center gap-4 md:text-xl text-[15px]'><CgProfile />Service</span>
                        <FaAngleRight className=' md:text-xl text-[15px]' />
                    </div>
                </div>
                <div className='w-[80%] flex justify-end'>
                    <button
                        type="button"
                        className="bg-red-500 text-white md:text-[15px] text-[10px] px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2 cursor-pointer"
                        onClick={handleLogoutAndRedirect}
                    >
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Account

import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import homeimage from "../assets/homeimage.webp"
import { useNavigate } from 'react-router-dom';


const CartPage = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1); 
    };

    return (
        <div>
            <div className="mx-auto p-6 bg-white w-full h-full flex flex-col items-center overflow-auto">
                <button className='md:text-3xl text-2xl p-2 cursor-pointer fixed right-2' onClick={handleClose}><RxCross2 /></button>

                <div className=''>
                    <h2 className="md:text-3xl text-xl font-bold mb-6 text-center">Your Cart</h2>
                </div>
                <div className="md:flex justify-between bg-[#E3D095] shadow-lg rounded-xl p-4 space-y-4 md:w-[70%] w-full">
                    <div className="md:w-[70%] w-full flex items-center justify-between border-b pb-4">
                        <div className="flex items-center space-x-4">
                            <img src={homeimage} alt="" className="md:w-40 md:h-40 w-20 h-20 rounded-lg" />
                            <div>
                                <h4 className="md:text-lg text-sm font-semibold">Table</h4>
                                <p className="text-gray-500">Rs 677/</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">−</button>
                            <span className="text-md font-medium">1</span>
                            <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                        </div>
                    </div>
                    <div className='flex md:flex-col justify-between md:justify-evenly md:w-[20%] w-full'>
                        <div className="flex justify-between md:justify-evenly items-center pt-4 md:text-[18px] text-[12px] font-semibold">
                            <span>Total:</span>
                            <span>Rs 677/</span>
                        </div>
                        <div className="text-right">
                            <button className="mt-2 md:px-2 md:py-1 p-1 text-[12px] md:text-[16px] bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage

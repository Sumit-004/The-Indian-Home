import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import homeimage from "../assets/homeimage.webp"
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';


const CartPage = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    };

    let dispatch=useDispatch();


    return (
        <div className='md:h-[100vw] h-[100dvh] bg-amber-200'>
            <div className=" mx-auto p-6 w-full h-full flex flex-col items-center overflow-auto">
                <button className='md:text-3xl text-2xl p-2 cursor-pointer fixed right-2' onClick={handleClose}><RxCross2 /></button>
                <div className=''>
                    <h2 className="md:text-3xl text-xl font-bold mb-6 text-center">Your Cart</h2>
                </div>
                <div className="bg-white md:flex-row flex-col justify-between shadow-lg rounded-xl p-4 space-y-4 md:w-[70%] w-full">

                    {/* Cart Card */}
                    <div className='flex flex-col w-full'>
                        <div className="w-full flex items-center justify-between border-b pb-4 md:px-6 px-2">
                            <div className="md:flex md:flex-row flex-col items-center space-x-4">
                                <img src={homeimage} alt="" className="md:w-50 md:h-40 w-20 h-20 rounded-lg" />
                                <div>
                                    <h4 className="md:text-lg text-sm">This is a Table with brown shade</h4>
                                    <p className="md:text-lg text-sm text-gray-500">Rs 677/</p>
                                </div>
                            </div>
                            <div className="md:space-y-10 space-y-3">
                                <div className="flex items-center space-x-2">
                                    <button className="md:px-3 px-2 md:py-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={()=>{qty>1?dispatch(DecreamentQty(id)):1}}>−</button>
                                    <span className="text-md font-medium md:font-semibold">1</span>
                                    <button className="md:px-3 px-2 md:py-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={()=>{dispatch(IncreamentQty(id))}}>+</button>
                                </div>
                                <button className='w-full flex justify-end'><RiDeleteBinLine className='md:text-2xl text-xl text-red-700 cursor-pointer'  onClick={()=>dispatch(RemoveItem(id))}/></button>
                            </div>
                        </div>
                    </div>
                    {/* ------------------ */}
                    <div className='flex justify-end'>
                        <div className='flex flex-col justify-between md:justify-end md:w-[40%] w-full'>
                            <div className='md:text-[15px] text-[11px]'>
                                <span>Subtotal:</span>
                                <span>Rs 477/</span>
                            </div>
                            <div className='md:text-[15px] text-[11px]'>
                                <span>Taxes:</span>
                                <span>Rs 59/</span>
                            </div>
                            <div className='md:text-[15px] text-[11px]'>
                                <span>Delivery Charges:</span>
                                <span>Rs 99/</span>
                            </div>
                            <div className="flex justify-between md:justify-evenly items-center pt-4 md:text-[18px] text-[12px] font-semibold">
                                <span>Total:</span>
                                <span>Rs 677/</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%] flex justify-end items-center">
                    <button className="mt-4 md:px-2 md:py-1 p-1 text-[12px] md:text-[18px] bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                        Proceed For Payment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage

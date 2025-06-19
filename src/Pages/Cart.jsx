import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import emptycart from '../assets/cart.jpg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveItem, DecreamentQty, IncreamentQty } from '../redux/cartSlice';

const Cart = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    };

    let dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    let subtotal = cart.reduce((total, item) => total + item.qty * item.price, 0)
    let deliveryFee = 20;
    let taxes = subtotal * 0.5 / 100;
    let total = Math.floor(subtotal + deliveryFee + taxes);


    return (
        <div className='md:h-[100vw] h-[100dvh] bg-amber-200'>
            <div className=" mx-auto p-6 w-full h-full flex flex-col items-center overflow-auto">
                <header className='fixed top-0 right-0 left-0 bg-amber-200 w-full'>
                <button className='md:text-3xl text-2xl p-2 cursor-pointer fixed right-2' onClick={handleClose}><RxCross2 /></button>
                <div className='flex items-center justify-center'>
                    <h2 className="md:text-3xl text-xl font-bold py-4 text-center">Your Cart</h2>
                </div>
                </header>
                {cart.length > 0 ? <>
                    <div className="bg-white mt-10 md:flex-row flex-col justify-between shadow-lg rounded-xl p-4 space-y-4 md:w-[70%] w-full">
                        {/* Cart Card */}
                        {cart.map((item) => (
                            <div className='flex flex-col w-full'>
                                <div className="w-full flex items-center justify-between border-b pb-4 md:px-6 px-2">
                                    <div className="md:flex md:flex-row flex-col items-center space-x-4">
                                        <img src={item.image} alt="" className="md:w-50 md:h-40 w-20 h-20 rounded-lg" />
                                        <div>
                                            <span className="md:text-lg text-[13px]">{item.name}</span>
                                            <p className="md:text-lg text-sm text-gray-500">Rs {item.price}/</p>
                                        </div>
                                    </div>
                                    <div className="md:space-y-10 space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <button className="md:px-3 px-2 md:py-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => { item.qty > 1 ? dispatch(DecreamentQty(item.id)) : 1 }}>−</button>
                                            <span className="text-md font-medium md:font-semibold">{item.qty}</span>
                                            <button className="md:px-3 px-2 md:py-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => { dispatch(IncreamentQty(item.id)) }}>+</button>
                                        </div>
                                        <button className='w-full flex justify-end'><RiDeleteBinLine className='md:text-2xl text-xl text-red-700 cursor-pointer' onClick={() => dispatch(RemoveItem(item.id))} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* ------------------ */}

                        <div className='flex justify-end'>
                            <div className='flex flex-col justify-between md:justify-end md:w-[40%] w-full'>
                                <div className='md:text-[15px] text-[11px]'>
                                    <span>Subtotal:</span>
                                    <span>Rs {subtotal}/</span>
                                </div>
                                <div className='md:text-[15px] text-[11px]'>
                                    <span>Taxes:</span>
                                    <span>Rs {taxes}/</span>
                                </div>
                                <div className='md:text-[15px] text-[11px]'>
                                    <span>Delivery Charges:</span>
                                    <span>Rs {deliveryFee}/</span>
                                </div>
                                <div className="flex justify-between md:justify-evenly items-center pt-4 md:text-[18px] text-[12px] font-semibold">
                                    <span>Total:</span>
                                    <span>Rs {total}/</span>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="w-[70%] flex justify-end items-center">
                        <button className="mt-4 md:px-2 md:py-1 p-1 text-[12px] md:text-[18px] bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 transition">
                            Save Your Address
                        </button>
                        </div>
                    <div className="w-[70%] flex justify-end items-center">
                        <button className="mt-4 md:px-2 md:py-1 p-1 text-[12px] md:text-[18px] bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                            Proceed For Payment
                        </button>
                    </div>
                    </>
                    : <div className="bg-white mt-10 flex flex-col justify-center items-center shadow-lg rounded-xl p-4 space-y-4 w-full max-w-2xl mx-auto">
                        <div className="w-[50%] sm:w-[70%] md:w-[60%] lg:w-[50%] aspect-square flex items-center justify-center overflow-hidden">
                            <img src={emptycart} alt="Empty Cart" className="h-full w-full object-contain" />
                        </div>
                        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-gray-700">Cart is <span className='text-red-500'>Empty!</span></h1>
                        <p>Looks like you have not added anything yet</p>
                        <button className='py-2 px-4 md:text-xl text-[12px] bg-blue-900 rounded-md text-white cursor-pointer hover:bg-blue-700 mt-4' onClick={handleClose}>Go to Home</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart

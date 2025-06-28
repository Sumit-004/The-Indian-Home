import React, { useContext, useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import emptycart from '../assets/cart.jpg'
import { dataContext } from '../Context/PageContext';

const Cart = () => {
    const { navigate, delivery_fee, products, cartItems, updateQuantity, getCartAmount } = useContext(dataContext);

    const [cartData, setCartData] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            const tempData = Object.entries(cartItems).map(([id, quantity]) => ({
                _id: id,
                quantity
            }));
            setCartData(tempData);
        }
    }, [cartItems, products]);



    let taxes = getCartAmount() * 0.5 / 100;

    return (
        <div className='mt-20'>
            <div className="bg-white mx-auto p-6 w-full h-full flex flex-col items-center">
                <header className='relative w-full'>
                    <button onClick={()=>navigate('/')} className='md:text-3xl text-2xl p-2 cursor-pointer absolute right-3 hover:text-gray-700'><RxCross2 /></button>
                    <div className='flex items-center ml-10 justify-center gap-2'>
                        <p className='prata-regular md:text-4xl text-3xl text-black font-semibold'><span className='text-gray-700'>Your</span> Cart</p>
                        <p className='w-8 h-[2px] bg-black'></p>
                    </div>
                </header>
                {cartData.length > 0 ? <>
                    <div className="bg-slate-100 md:mt-6 mt-12 md:flex-row flex-col justify-between shadow-lg rounded-xl p-4 space-y-4 md:w-[70%] w-full">
                        {/* Cart Card */}
                        {
                            cartData.map((item, index) => {
                                const productData = products.find((product) => product._id === item._id);
                                  if (!productData) return null;

                                return (
                                    <div key={index} className='flex flex-col w-full'>
                                        <div className="w-full flex items-center justify-between border-b pb-4 md:px-6 px-2">
                                            <div className="md:flex md:flex-row flex-col items-center space-x-4">
                                                <img src={productData.image} alt="" className="md:w-50 md:h-40 w-20 h-20 rounded-lg" />
                                                <div>
                                                    <span className="md:text-lg text-[13px]">{productData.description}</span>
                                                    <p className="md:text-lg text-sm text-gray-500">Rs {productData.price}/</p>
                                                </div>
                                            </div>
                                            <div className="md:space-y-10 space-y-3">
                                                <div className="flex items-center space-x-2">
                                                    <button className="md:px-3 px-2 md:py-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => updateQuantity(item._id, item.quantity - 1)}>−</button>
                                                    <span className="text-md font-medium md:font-semibold">{item.quantity}</span>
                                                    <button className="md:px-3 px-2 md:py-2 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                                                </div>
                                                <button onClick={() => updateQuantity(item._id, 0)} className='w-full flex justify-end'><RiDeleteBinLine className='md:text-2xl text-xl text-red-700 cursor-pointer' /></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* ------------------ */}

                        <div className='flex justify-end'>
                            <div className='flex flex-col justify-between md:justify-end md:w-[40%] w-full'>
                                <div className='md:text-[15px] text-[11px]'>
                                    <span>Subtotal:</span>
                                    <span>Rs {getCartAmount()}/</span>
                                </div>
                                <div className='md:text-[15px] text-[11px]'>
                                    <span>Taxes:</span>
                                    <span>Rs {taxes}/</span>
                                </div>
                                <div className='md:text-[15px] text-[11px]'>
                                    <span>Delivery Charges:</span>
                                    <span>Rs {delivery_fee}/</span>
                                </div>
                                <div className="flex justify-between md:justify-evenly items-center pt-4 md:text-[18px] text-[12px] font-semibold">
                                    <b>Total:</b>
                                    <b>Rs {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee + taxes}/</b>
                                </div>
                            </div>
                        </div>
                    </div >

                    <div className="w-[70%] flex justify-end items-center">
                        <button onClick={() => navigate('/placeorder')} className="mt-4 md:px-3 md:py-1 p-1 text-[12px] md:text-[20px] bg-black text-white transition-all cursor-pointer">
                            Proceed To Checkout
                        </button>
                    </div>
                </>
                    : <div className="bg-white mt-4 mb-10 flex flex-col justify-center items-center shadow-lg rounded-xl p-4 space-y-4 w-full max-w-2xl mx-auto">
                        <div className="w-[50%] sm:w-[70%] md:w-[60%] lg:w-[50%] aspect-square flex items-center justify-center overflow-hidden">
                            <img src={emptycart} alt="Empty Cart" className="h-full w-full object-contain" />
                        </div>
                        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-gray-700">Cart is <span className='text-red-500'>Empty!</span></h1>
                        <p>Looks like you have not added anything yet</p>
                        <button className='py-2 px-4 md:text-xl text-[12px] bg-blue-900 rounded-md text-white cursor-pointer hover:bg-blue-700 mt-4'>Go to Home</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart

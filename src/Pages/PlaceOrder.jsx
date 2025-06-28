import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux';
import { CiCreditCard1 } from "react-icons/ci";
import { SiPaytm } from "react-icons/si";
import { dataContext } from '../Context/PageContext';
import axios from 'axios';
import toast from 'react-hot-toast';



const PlaceOrder = () => {
    const { navigate, delivery_fee, backendUrl, token, cartItems, setCartItems, getCartAmount, products } = useContext(dataContext);

    let taxes = getCartAmount() * 0.5 / 100;

    let [method, setMethod] = useState('cod');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
        phone: ''
    })

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData(data => ({ ...data, [name]: value }))
    }


    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {

            let orderItems = []


            for (const productId in cartItems) {
                const quantity = cartItems[productId];

                if (quantity > 0) {
                    const product = products.find(p => p._id === productId);
                    if (product) {
                        orderItems.push({
                            productId: product._id,
                            description: product.description,
                            price: product.price,
                            quantity,
                            total: product.price * quantity,
                            image: product.image
                        });
                    }
                }
            }
            console.log(orderItems);


            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee + taxes
            }

            switch (method) {
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })

                    if (response.data.success) {
                        setCartItems({})
                        navigate('/orders')
                    } else {
                        toast.error(response.data.message)
                    }
                    break;

                default:
                    break;
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='mt-26 mb-6'>
            <div className='flex items-center ml-10 justify-start gap-2'>
                <p className='prata-regular md:text-4xl text-3xl text-black font-semibold'><span className='text-gray-700'>Place</span> Order</p>
                <p className='w-8 h-[2px] bg-black'></p>
            </div>

            <div className='w-full md:flex md:flex-row flex flex-col mt-6'>
                <div className='md:w-[50%] w-full h-auto md:px-20 px-8 py-8 flex flex-col gap-2'>
                    <input required onChange={onChangeHandler} name='fullName' value={formData.fullName} type="text" placeholder='Enter Your Name' className='border p-2 w-full' />
                    <input required onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='Enter Your Email' className='border p-2 w-full' />
                    <input required onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='Street' className='border p-2 w-full' />
                    <div className='flex gap-2'>
                        <input required onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='City' className='border p-2 w-full' />
                        <input required onChange={onChangeHandler} name='state' value={formData.state} type="text" placeholder='State' className='border p-2 w-full' />
                    </div>
                    <div className='flex gap-2'>
                        <input required onChange={onChangeHandler} name='pincode' value={formData.pincode} type="text" placeholder='Pincode' className='border p-2 w-full' />
                        <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='Country' className='border p-2 w-full' />
                    </div>
                    <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="text" placeholder='Phone' className='border p-2 w-full' />

                </div>
                <div className='md:w-[50%] w-full h-auto mt-8 md:mx-4'>
                    <div className='flex justify-center py-8 md:px-0 px-4 border mx-4'>
                        <div className='flex flex-col justify-between md:justify-end md:w-[40%] w-full'>
                            <div className='md:text-[17px] text-[11px]'>
                                <span>Subtotal:</span>
                                <span>Rs {getCartAmount()}/</span>
                            </div>
                            <div className='md:text-[17px] text-[11px]'>
                                <span>Taxes:</span>
                                <span>Rs {taxes}/</span>
                            </div>
                            <div className='md:text-[17px] text-[11px]'>
                                <span>Delivery Charges:</span>
                                <span>Rs {delivery_fee}/</span>
                            </div>
                            <div className="flex justify-between md:justify-evenly items-center pt-4 md:text-[18px] text-[12px] font-semibold">
                                <span>Total:</span>
                                <span>Rs {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee + taxes}/</span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 mx-3.5'>
                        <div className='flex items-center ml-10 justify-start mb-4 gap-2'>
                            <p className='prata-regular md:text-2xl text-xl text-black font-semibold'><span className='text-gray-700'>Payment</span> Method</p>
                            <p className='w-8 h-[2px] bg-black'></p>
                        </div>
                        <div className='border flex justify-evenly py-4'>
                            <div onClick={() => setMethod('card')} className='flex items-center md:gap-2 gap-1 '>
                                <p className={`h-[12px] w-[12px] border border-gray-400 rounded-full cursor-pointer ${method === 'card' ? 'bg-green-500' : ""} `}></p>
                                <span className='flex items-center gap-2 md:text-xl text-[11px]'><CiCreditCard1 />Debit/Credit Card</span>
                            </div>
                            <div onClick={() => setMethod('upi')} className='flex items-center md:gap-2 gap-1 '>
                                <p className={`h-[12px] w-[12px] border border-gray-400 rounded-full cursor-pointer ${method === 'upi' ? 'bg-green-500' : ""} `}></p>
                                <span className='flex items-center gap-2 md:text-xl text-[11px]'><SiPaytm />UPI Payment</span>
                            </div>
                            <div onClick={() => setMethod('cod')} className='flex items-center md:gap-2 gap-1 '>
                                <p className={`h-[12px] w-[12px] border border-gray-400 rounded-full cursor-pointer ${method === 'cod' ? 'bg-green-500' : ""} `}></p>
                                <span className='flex items-center gap-2 md:text-xl text-[11px]'>Cash On Delivery</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pr-8 mt-6 flex justify-end items-center">
                        <button type='submit' className="mt-4 md:px-3 px-2 md:py-1.5 py-1 text-[12px] md:text-[20px] bg-black text-white transition-all cursor-pointer">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default PlaceOrder

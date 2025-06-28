import React, { useContext, useEffect, useState } from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { dataContext } from '../Context/PageContext';
import axios from 'axios';

const Orders = () => {
  let { backendUrl, token, item } = useContext(dataContext)

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
console.log(response.data);

      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item[''] = order.image
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
        
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    loadOrderData()
  }, [token])


  
  return (
    <div className='mt-25 mb-15 md:mx-16 border-b border-gray-400'>
      <div className='flex items-center ml-10 justify-start gap-2'>
        <p className='prata-regular md:text-4xl text-3xl text-black font-semibold'><span className='text-gray-700'>My</span> Order</p>
        <p className='w-8 h-[2px] bg-black'></p>
      </div>
      {orderData.map((item, index) => (<div key={index} className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-300 w-full my-2 md:py-4 py-2 md:px-10 px-6 text-gray-700'>
        <div className='flex justify-start gap-6'>
          <img className='w-30' src={item.image && item.image[0]} alt="" />
          <div className='flex flex-col gap-1'>
            <p className='md:font-medium md:text-lg text-sm'>{item.description}</p>
            <div className='flex items-center gap-3 mt-2'>
              <p className='md:text-lg text-sm flex items-center'><LiaRupeeSignSolid /> {item.price}</p>
              <p className='md:text-lg text-sm'>Quantity :{item.quantity}</p>
            </div>
            <div>
              <p className='md:text-lg text-sm'>Date: <span className='text-gray-500'>{new Date(item.date).toDateString()}</span></p>
              <p className='md:text-lg text-sm'>Payment: <span className='text-gray-500'>{item.paymentMethod}</span></p>
            
            </div>
          </div>
        </div>
        <div className='flex justify-between md:w-1/2'>
          <div className='flex items-center md:gap-2 gap-1 '>
            <p className='h-[10px] w-[10px] rounded-full cursor-pointer bg-green-500'></p>
            <span className='flex items-center gap-2 md:text-[13px] text-[11px]'>{item.status}</span>
          </div>
          <button onClick={loadOrderData} className='border md:px-3 px-2 py-1.5 cursor-pointer rounded-sm text-sm font-medium'>Track Order</button>
        </div>
      </div>))}
    </div>
  )
}

export default Orders

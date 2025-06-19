import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { dataContext } from '../Context/PageContext'
import { toast } from 'react-hot-toast';
import Header from '../FrontendComponents/Header'
import Login from './Login/Signin';

const AllItem = () => {

  let { item, setItem } = useContext(dataContext)

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      {/* <Login/> */}
      <h1 className='flex justify-center md:text-4xl text-3xl my-4 pt-5 font-semibold mt-25'>SHOP NOW</h1>
      <div className='flex flex-wrap justify-center w-full md:mx-4 mx-1 mb-8'>
        {item.map((card,index) => (
          <div className='md:my-5 my-5' key={index}>
            <div className=' md:h-[340px] md:w-[290px] h-[188px] w-[140px] md:p-2 p-0 flex flex-col md:mx-6 mx-2.5'>
              <div className='md:h-[77%] h-[65%] w-full overflow-hidden'>
                <img src={card.item_image} alt="" className='object-hit h-full w-full hover:scale-107 transition-all duration-200' />
              </div>
              <div className='md:h-[23%] h-[35%] md:text-[13px] text-[9px]'>
                <div className='h-1.5/2'>
                  <span>{card.description}</span>
                </div>
                <div className='md:my-1.5 my-1 md:flex md:flex-row flex-col justify-between h-0.5/2 md:text-[16px] text-[10px]'>
                  <div>
                    <span className='line-through'>Rs. 599/-</span>
                    <span className='font-semibold'>Rs. {card.price}/-</span>
                  </div>
                  <div className='flex justify-end mt-1'>
                    <button className='bg-blue-900 md:text-[14px] text-[10px] px-2 py-1 text-white rounded-sm hover:bg-blue-700 transition-all duration-200 cursor-pointer' onClick={() => { dispatch(AddItem({ id: card.id, name: card.description, image: card.item_image, price: card.price, qty: card.item_quantity })); toast.success('Added to Cart!') }}>Add+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default AllItem

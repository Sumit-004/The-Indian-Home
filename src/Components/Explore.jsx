import React from 'react'
import { useNavigate } from 'react-router-dom';

import img from '../assets/category/kitchenitem.jpg'

const newItem = [
    { "id": 1, "description": "This is an item", "item_category": "TableWare", "item_quantity": 1, "item_image": img, "price": 199 },
    { "id": 2, "description": "This is an item", "item_category": "ShowPiece", "item_quantity": 1, "item_image": img, "price": 149 },
    { "id": 3, "description": "This is an item", "item_category": "ShowPiece", "item_quantity": 1, "item_image": img, "price": 199 },
    { "id": 4, "description": "This is an item", "item_category": "Vases", "item_quantity": 1, "item_image": img, "price": 139 },
    { "id": 5, "description": "This is an item", "item_category": "CupSet", "item_quantity": 1, "item_image": img, "price": 139 },
    { "id": 6, "description": "This is an item", "item_category": "CupSet", "item_quantity": 1, "item_image": img, "price": 139 },
    { "id": 7, "description": "This is an item", "item_category": "CupSet", "item_quantity": 1, "item_image": img, "price": 139 },
    { "id": 8, "description": "This is an item", "item_category": "Vases", "item_quantity": 1, "item_image": img, "price": 139 },
]

const Explore = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
    navigate('/AllItem'); 
  };

    return (
        <>
            <h1 className='flex justify-center md:text-4xl text-3xl my-4 pt-5 font-semibold'>EXPLORE</h1>
            <div className='flex flex-wrap justify-center w-full md:mx-4 mx-1'>
                {newItem.map((card) => (
                    <div className='md:my-4 my-2'>
                        <div className='md:h-[320px] md:w-[280px] h-[150px] w-[110px] bg-gray-300 text-[#332D56] md:p-4 p-2 flex flex-col md:mx-6 mx-2.5'>
                            <div className='w-full h-[55%] overflow-hidden'>
                                <img src={img} alt="" className='w-full h-full object-fit hover:scale-110 transition-all duration-200' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between mt-2 md:text-[15px] text-[12px]'>
                                    <span>{card.description}</span>
                                </div>
                                <div className='flex gap-3 justify-end md:text-[16px] text-[10px]'>
                                    <span className='line-through'>Rs. 599/-</span>
                                    <span className='font-semibold'>Rs. {card.price}/-</span>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='md:mt-8 mt-2 bg-blue-800 hover:bg-blue-950 transition-all duration-300 cursor-pointer rounded-sm md:text-[14px] text-[10px] text-white p-2'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='w-full flex justify-center my-4'>
                    <button className='md:text-[20px] text-[10px] py-2 px-4 bg-black text-white font-semibold cursor-pointer hover:bg-blue-950' onClick={handleClick}>VIEW ALL</button>
                </div>
            </div>
        </>
    )
}

export default Explore

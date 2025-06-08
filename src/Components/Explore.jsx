import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-hot-toast';
import img1 from '../assets/cupzip/img 3.jpg'
import img2 from '../assets/newarrival/new1.jpg'
import img3 from '../assets/homedecor/img1.jpg'
import img4 from '../assets/cupzip/img 1.jpg'
import img5 from '../assets/homedecor/img2.jpg'
import img6 from '../assets/cupzip/img 2.jpg'
import img7 from '../assets/homedecor/img3.jpg'
import img8 from '../assets/newarrival/new2.jpg'

const newItem = [
    { "id": 1, "description": "Kitchen Assessories", "item_category": "TableWare", "item_quantity": 1, "item_image": img1, "price": 199 },
    { "id": 2, "description": "This is an item", "item_category": "ShowPiece", "item_quantity": 1, "item_image": img2, "price": 149 },
    { "id": 3, "description": "This is an item", "item_category": "ShowPiece", "item_quantity": 1, "item_image": img3, "price": 199 },
    { "id": 4, "description": "This is an item", "item_category": "Vases", "item_quantity": 1, "item_image": img4, "price": 139 },
    { "id": 5, "description": "Europian Style Abstract Family Statue", "item_category": "CupSet", "item_quantity": 1, "item_image": img5, "price": 139 },
    { "id": 6, "description": "This is an item", "item_category": "CupSet", "item_quantity": 1, "item_image": img6, "price": 139 },
    { "id": 7, "description": "This is an item", "item_category": "CupSet", "item_quantity": 1, "item_image": img7, "price": 139 },
    { "id": 8, "description": "This is an item", "item_category": "Vases", "item_quantity": 1, "item_image": img8, "price": 139 },
]

const Explore = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // window.scrollTo({ top: 0, behavior: 'smooth'});
        navigate('/AllItem');
    };

      const dispatch = useDispatch();

    return (
        <>
            <h1 className='flex justify-center md:text-4xl text-3xl my-4 pt-5 font-semibold'>EXPLORE</h1>
            <div className='flex flex-wrap justify-center w-full md:mx-4 mx-1'>
                {newItem.map((card) => (
                    <div className='md:my-4 my-2'>
                        <div className=' md:h-[320px] md:w-[280px] h-[185px] w-[140px] bg-[#E7EFC7] md:p-2 p-0 flex flex-col md:mx-6 mx-2.5'>
                            <div className='md:h-[77%] h-[65%] w-full overflow-hidden'>
                                <img src={card.item_image} alt="" className='object-hit h-full w-full hover:scale-107 transition-all duration-200' />
                            </div>
                            <div className='md:h-[23%] h-[35%] md:text-[15px] text-[9px]'>
                                <div className='h-1.5/2'>
                                    <span>{card.description}</span>
                                </div>
                                <div className='md:flex md:flex-row flex-col justify-between h-0.5/2 md:text-[16px] text-[10px]'>
                                    <div>
                                        <span className='line-through'>Rs. 599/-</span>
                                        <span className='font-semibold'>Rs. {card.price}/-</span>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button className='bg-blue-900 md:text-[14px] text-[10px] px-2 py-1 text-white rounded-sm hover:bg-blue-700 transition-all duration-200 cursor-pointer' onClick={()=>{dispatch(AddItem({id:card.id,name:card.description,image:card.item_image,price:card.price,qty:card.item_quantity}));toast.success('Added to Cart!')}} >Add+</button>
                                    </div>
                                </div>
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

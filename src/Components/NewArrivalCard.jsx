import React from 'react'
import img from '../assets/category/kitchenitem.jpg'
import { useRef, useEffect } from 'react';

// New Arrival Section Cards

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



const NewArrivalCard = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        let offset = 0;
        const step = () => {
            offset += 1;
            if (offset >= (track.scrollWidth / 3)) {
                offset = 0;
            }
            track.style.transform = `translateX(-${offset}px)`;
            requestAnimationFrame(step);
        };
        step();
    }, []);

    const extendedCards = [...newItem, ...newItem.slice(0, 4)];



    return (
        <>
            <div className="w-full overflow-hidden max-w-7xl mx-auto">
                <div
                    ref={trackRef}
                    className="flex w-[300%] transition-transform duration-500 ease-linear"
                >
                    {extendedCards.map((card, index) => (
                        <div className='md:my-4 my-3'>
                            <div className='md:h-[320px] md:w-[280px] h-[180px] w-[140px] bg-gray-300 text-[#332D56] md:p-4 p-2 flex flex-col mx-8'>
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
                </div>
            </div>


        </>

    )
}

export default NewArrivalCard

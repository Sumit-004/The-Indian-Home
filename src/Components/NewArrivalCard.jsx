import React from 'react'
import new1 from '../assets/newarrival/new1.jpg'
import new2 from '../assets/newarrival/new2.jpg'
import new3 from '../assets/newarrival/new3.jpg'
import new4 from '../assets/newarrival/new4.jpg'
import new5 from '../assets/newarrival/new5.jpg'
import new6 from '../assets/newarrival/new6.jpg'
import new7 from '../assets/newarrival/new7.jpg'
import new8 from '../assets/newarrival/new8.jpg'

import { useRef, useEffect } from 'react';

// New Arrival Section Cards

const newItem = [
    { "id": 1, "description": "Home Decore Thinker Showpiece- Set Of 3", "item_category": "TableWare", "item_quantity": 1, "item_image": new1, "price": 1199 },
    { "id": 2, "description": "Black Cat Animal Milk Cup", "item_category": "ShowPiece", "item_quantity": 1, "item_image": new2, "price": 499 },
    { "id": 3, "description": "Flower Vase For Home Decore", "item_category": "ShowPiece", "item_quantity": 1, "item_image": new3, "price": 549 },
    { "id": 4, "description": "Ceremic Tea, Coffee Cup Office Home Gifts", "item_category": "Vases", "item_quantity": 1, "item_image": new4, "price": 499 },
    { "id": 5, "description": "The Lover Ornaments for Home Statues Couple Hug", "item_category": "CupSet", "item_quantity": 1, "item_image": new5, "price": 1199 },
    { "id": 6, "description": "Europian Style Abstract Family Statue", "item_category": "CupSet", "item_quantity": 1, "item_image": new6, "price": 1199 },
    { "id": 7, "description": "Ceremic Flower Pebble Vase White", "item_category": "CupSet", "item_quantity": 1, "item_image": new7, "price": 449 },
    { "id": 8, "description": "Hugging Couple Sculptures Home Decore ", "item_category": "Vases", "item_quantity": 1, "item_image": new8, "price": 1199 },
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
                                        <button className='bg-blue-900 md:text-[14px] text-[10px] px-2 py-1 text-white rounded-sm hover:bg-blue-700 transition-all duration-200 cursor-pointer'>Add+</button>
                                    </div>
                                </div>
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

import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { dataContext } from '../Context/UserContext';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { useRef, useEffect } from 'react';

// New Arrival Section Cards

const NewArrivalCard = () => {
    let { item } = useContext(dataContext)


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


    const newIds = [4, 18, 24, 37, 44, 55];
    const newItems = item.filter(item => newIds.includes(item.id));

    const extendedCards = [...newItems, ...newItems.slice(0, 4)];

    const dispatch = useDispatch();


    return (
        <>
            <div className="w-full overflow-hidden max-w-7xl mx-auto">
                <div
                    ref={trackRef}
                    className="flex w-[300%] transition-transform duration-500 ease-linear"
                >
                    {extendedCards.map((card) => (
                        <div className='md:my-4 my-2'>
                            <div key={card.id} className=' md:h-[320px] md:w-[280px] h-[185px] w-[140px] bg-[#E7EFC7] md:p-2 p-0 flex flex-col md:mx-6 mx-2.5'>
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
                                            <button className='bg-blue-900 md:text-[14px] text-[10px] px-2 py-1 text-white rounded-sm hover:bg-blue-700 transition-all duration-200 cursor-pointer' onClick={() => { dispatch(AddItem({ id: card.id, name: card.description, image: card.item_image, price: card.price, qty: card.item_quantity })); toast.success('Added to Cart!') }}>Add+</button>
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

export default NewArrivalCard;

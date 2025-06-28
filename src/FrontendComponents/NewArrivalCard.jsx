import React, { useContext, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { dataContext } from '../Context/PageContext';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';

const NewArrivalCard = () => {
    const { item, products } = useContext(dataContext);
    const trackRef = useRef(null);
    const animationRef = useRef(null);
    const offsetRef = useRef(0);
    const isPaused = useRef(false);

    const dispatch = useDispatch();

    const filterProducts = products?.slice(4, 12) || [];

    useEffect(() => {
        const track = trackRef.current;

        const step = () => {
            if (!isPaused.current) {
                offsetRef.current += 1;
                if (offsetRef.current >= (track.scrollWidth / 3)) {
                    offsetRef.current = 0;
                }
                track.style.transform = `translateX(-${offsetRef.current}px)`;
            }
            animationRef.current = requestAnimationFrame(step);
        };

        animationRef.current = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    const handleMouseEnter = () => {
        isPaused.current = true;
    };

    const handleMouseLeave = () => {
        isPaused.current = false;
    };

    return (
        <div className="w-full overflow-hidden max-w-7xl mx-auto mb-8">
            <div
                ref={trackRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex w-[300%] transition-transform duration-500 ease-linear"
            >
                {filterProducts.map((card, index) => (
                    <div className='md:my-4 my-2' key={index}>
                        <div key={card.id} className='md:h-[320px] md:w-[280px] h-[185px] w-[140px] md:p-2 p-0 flex flex-col md:mx-6 mx-2.5'>
                            <div className='md:h-[77%] h-[65%] w-full overflow-hidden'>
                                <img src={card.image && card.image[0]} alt="" className='object-hit h-full w-full hover:scale-107 transition-all duration-200' />
                            </div>
                            <div className='md:h-[23%] h-[35%] md:text-[15px] text-[9px]'>
                                <div className='h-1.5/2'>
                                    <span>{card.description}</span>
                                </div>
                                <div className='md:flex md:flex-row flex-col justify-between h-0.5/2 md:text-[16px] text-[10px]'>
                                    <div>
                                        {/* <span className='line-through'>Rs. 599/-</span> */}
                                        <span className='font-semibold'>Rs. {card.price}/-</span>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button
                                            className='bg-blue-900 md:text-[14px] text-[10px] px-2 py-1 text-white rounded-sm hover:bg-blue-700 transition-all duration-200 cursor-pointer'
                                            onClick={() => {
                                                dispatch(AddItem({
                                                    id: card.id,
                                                    name: card.description,
                                                    image: card.item_image,
                                                    price: card.price,
                                                    qty: card.item_quantity
                                                }));
                                                toast.success('Added to Cart!');
                                            }}
                                        >
                                            Add+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewArrivalCard;

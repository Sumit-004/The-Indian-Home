import React, { useContext } from 'react'
import { dataContext } from '../Context/PageContext';
import { toast } from 'react-hot-toast';


const Explore = () => {
    let { navigate, products,addToCart } = useContext(dataContext)

    const allClick = () => {
        // window.scrollTo({ top: 0, behavior: 'smooth'});
        navigate('/AllItem');
    };
    const filterProducts = products?.slice(0, 8) || [];


    return (
        <>
            <div className='mt-16 flex items-center justify-center gap-2'>
                <p className='w-8 h-[2px] bg-black'></p>
                <p className='prata-regular md:text-5xl text-3xl text-gray-600 font-semibold'>Explore</p>
            </div>
            <div className='flex flex-wrap justify-center w-full md:mx-4 mx-1'>
                {filterProducts.map((card, index) => (
                    <div className='md:my-6 my-5' key={index}>
                        <div className=' md:h-[340px] md:w-[290px] h-[185px] w-[140px] md:p-2 p-0 flex flex-col md:mx-6 mx-2.5'>
                            <div className='md:h-[77%] h-[65%] w-full overflow-hidden'>
                                <img src={card.image && card.image[0]} alt="" className='object-hit h-full w-full hover:scale-107 transition-all duration-200' />
                            </div>
                            <div className='md:h-[23%] h-[35%] md:text-[15px] text-[9px]'>
                                <div className='h-1.5/2'>
                                    <span>{card.description}</span>
                                </div>
                                <div className='md:flex md:flex-row flex-col justify-between h-0.5/2 md:text-[16px] text-[10px]'>
                                    <div>
                                        {/* <span className='line-through'>Rs. {card.cross_price}/-</span> */}
                                        <span className='font-semibold'>Rs. {card.price}/-</span>
                                    </div>
                                    <div className='flex justify-center mt-2'>
                                        <button className='bg-blue-900 md:text-[14px] text-[10px] px-2 py-1 text-white rounded-sm hover:bg-blue-700 transition-all duration-200 cursor-pointer' onClick={() => addToCart(card._id)} >Add+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='w-full flex justify-center my-4'>
                    <button className='md:text-[20px] text-[10px] py-2 px-4 bg-black text-white font-semibold cursor-pointer hover:bg-blue-950' onClick={() => navigate('/AllItem')}>VIEW ALL</button>
                </div>
            </div>
        </>
    )
}

export default Explore

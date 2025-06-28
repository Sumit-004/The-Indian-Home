import React, { useContext } from 'react';
import { dataContext } from '../Context/PageContext';
import { toast } from 'react-hot-toast';

const AllItem = () => {
  const { input, products, addToCart, category,  } = useContext(dataContext);

  const filteredProducts = products.filter(product => {
    const matchesInput = product.description.toLowerCase().includes(input.trim().toLowerCase());
    const matchesCategory = category === '' || product.category === category;
    return matchesInput && matchesCategory;
  });



  return (
    <>
      <div className='flex items-center ml-10 justify-center gap-2 md:mt-25 mt-20'>
        <p className='prata-regular md:text-4xl text-3xl text-black font-semibold'><span className='text-gray-700'>Your</span> Cart</p>
        <p className='w-8 h-[2px] bg-black'></p>
      </div>      <div className='flex flex-wrap justify-center gap-2 w-full md:mx-4 mb-8'>
        {filteredProducts.map((card, index) => (
          <div className='md:my-5 my-5' key={index}>
            <div className=' md:h-[340px] md:w-[290px] h-[180px] w-[140px] md:p-2 p-0 flex flex-col md:mx-6 mx-2.5'>
              <div className='md:h-[77%] h-[70%] w-full overflow-hidden'>
                <img src={card.image && card.image[0]} alt="" className='object-fit h-full w-full hover:scale-107 transition-all duration-200' />
              </div>
              <div className='md:h-[23%] h-[30%] md:text-[13px] text-[9px]'>
                <div className='h-1.5/2'>
                  <span>{card.description}</span>
                </div>
                <div className='md:my-1.5 my-1 md:flex md:flex-row flex-col justify-between h-0.5/2 md:text-[16px] text-[10px]'>
                  <div>
                    {/* <span className='line-through'>Rs. 4556/-</span> */}
                    <span className='font-semibold'>Rs. {card.price}/-</span>
                  </div>
                  <div className='flex justify-end mt-1'>
                    <button
                      className='bg-blue-900 md:text-[14px] text-[10px] px-2 py-1 text-white rounded-sm hover:bg-blue-700 transition-all duration-200 cursor-pointer'
                      onClick={() => addToCart(card._id)}
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
    </>
  );
};

export default AllItem;

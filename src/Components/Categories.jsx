import React from 'react'
import img from '../assets/category/table.jpg'
import img2 from '../assets/category/showpiece.jpg'
import img3 from '../assets/category/vases.jpg'
import img4 from '../assets/category/homedecore.jpg'
import img5 from '../assets/category/kitchenitem.jpg'
import img6 from '../assets/category/cups.jpg'


const category = [
    {
        img: img,
        title: "Table Ware",
    },
    {
        img: img2,
        title: "Showpiece",
    },
    {
        img: img3,
        title: "Vases",
    },
    {
        img: img4,
        title: "Home Decor",
    },
    {
        img: img5,
        title: "Kitchen Ware",
    },
    {
        img: img6,
        title: "Cups & Set",
    },
]


const Categories = () => {

    return (
        <>
        
            <div className='flex justify-center w-full h-auto mt-22'>
                <h1 className='flex justify-center md:text-4xl text-3x pt-5 font-semibold'>Categories</h1>
            </div>
            <div className='flex flex-wrap md:gap-15 gap-3 md:justify-center justify-evenly my-6'>
                {category.map((item) => {
                    return <div className='flex flex-col gap-1 cursor-pointer'>
                        <div className="md:h-40 md:w-40 h-22 w-22 rounded-full bg-amber-300 object-cover overflow-hidden border-6 border-blue-900 shadow-lg">
                            <img src={item.img} alt="" className='h-full w-full hover:scale-110 transition-all duration-200' />
                        </div>
                        <button className='bg-[#dfe4af] text-blue-800 md:text-[14px] text-[10px] border-2 md:py-1 cursor-pointer'>{item.title}</button>
                    </div>
                })}
            </div>
        </>

    )
}

export default Categories

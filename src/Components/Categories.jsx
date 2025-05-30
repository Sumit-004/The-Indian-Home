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
        <div className='flex flex-wrap md:gap-15 md:justify-center justify-evenly my-6'>
            {category.map((item) => {
                return <div className='flex flex-col gap-1 cursor-pointer'>
                    <div className="md:h-40 md:w-40 h-25 w-25 rounded-full bg-amber-300 object-cover overflow-hidden border-6 border-blue-900 shadow-lg">
                        <img src={item.img} alt="" className='h-full w-full' />
                    </div>
                    <h1 className='bg-[#dfe4af] text-blue-800 text-center p-1'>{item.title}</h1>
                </div>
            })}


        </div>
    )
}

export default Categories

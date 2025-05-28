import React from 'react'
import img from '../assets/category/table.jpg'
import img2 from '../assets/category/showpiece.jpg'
import img3 from '../assets/category/vases.jpg'
import img4 from '../assets/category/homedecore.jpg'
import img5 from '../assets/category/kitchenitem.jpg'


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

]


const Categories = () => {

    return (
        <div className='flex items-center justify-center gap-12'>
            {category.map((item) => {
                return <div className='h-55 w-45 flex items-center justify-center relative overflow-hidden'>
                    <div className="w-40 h-35 transform rotate-12 skew-x-12 border-6 border-slate-700 shadow-lg overflow-hidden">
                        <img src={item.img} alt="" className='h-full w-full scale-120 -skew-x-12 -rotate-12' />
                    </div>
                    <h1 className='absolute bg-[#FAFFCA] px-2 py-1 bottom-4 -right-1 '>{item.title}</h1>
                </div>
            })}


        </div>
    )
}

export default Categories

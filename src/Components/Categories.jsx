import React from 'react'
import img from '../assets/category/table.jpg'
import img2 from '../assets/category/showpiece.jpg'
import img3 from '../assets/category/vases.jpg'
import img4 from '../assets/category/homedecore.jpg'
import img5 from '../assets/category/kitchenitem.jpg'
<<<<<<< HEAD
import img6 from '../assets/category/cups.jpg'
=======
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b


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
<<<<<<< HEAD
    {
        img: img6,
        title: "Cups & Set",
    },
=======

>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
]


const Categories = () => {

    return (
<<<<<<< HEAD
        <div className='flex flex-wrap md:gap-15 md:justify-center justify-evenly my-6'>
            {category.map((item) => {
                return <div className='flex flex-col gap-1 cursor-pointer'>
                    <div className="md:h-40 md:w-40 h-25 w-25 rounded-full bg-amber-300 object-cover overflow-hidden border-6 border-blue-900 shadow-lg">
                        <img src={item.img} alt="" className='h-full w-full' />
                    </div>
                    <h1 className='bg-[#dfe4af] text-blue-800 text-center p-1'>{item.title}</h1>
=======
        <div className='flex items-center justify-center gap-12'>
            {category.map((item) => {
                return <div className='h-55 w-45 flex items-center justify-center relative overflow-hidden'>
                    <div className="w-40 h-35 transform rotate-12 skew-x-12 border-6 border-slate-700 shadow-lg overflow-hidden">
                        <img src={item.img} alt="" className='h-full w-full scale-120 -skew-x-12 -rotate-12' />
                    </div>
                    <h1 className='absolute bg-[#FAFFCA] px-2 py-1 bottom-4 -right-1 '>{item.title}</h1>
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
                </div>
            })}


        </div>
    )
}

export default Categories

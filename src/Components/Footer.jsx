import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import LocationMap from '../Components/LocationMap'
import logo from '../assets/logo1.png'

const Footer = () => {
  return (
    <div className='bg-[#FAFFCA] w-full h-[500px] flex flex-col gap-2'>
      <footer className='flex px-[100px]'>
        <div className='h-full w-1/5 flex flex-col items-center justify-center gap-8 px-3'>
          <div className='h-[100px] w-[100px]'><img src={logo} alt="" /></div>
          <p>Sign up for exclusive offers, original stories, events and more.</p>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>Store Timing:</h1>
            <p>9:00 am TO 6:00 pm (everyday)</p>
          </div>
          <div className='flex gap-5 text-2xl justify-center'>
            <FaFacebook />
            <FaInstagramSquare />
            <FaYoutube />
          </div>
        </div>
        <div className='h-full w-1/5 flex flex-col gap-6 mt-20 items-center'>
          <h1 className='font-bold text-2xl border-b-3 border-red-800'>Quick Links</h1>
          <ul className='flex flex-col gap-2'>
            <li className='hover:underline cursor-pointer'>Our Story</li>
            <li className='hover:underline cursor-pointer'>Contact us</li>
            <li className='hover:underline cursor-pointer'>FAQ</li>
            <li className='hover:underline cursor-pointer'>Terms & Conditions</li>
            <li className='hover:underline cursor-pointer'>Blogs</li>
            <li className='hover:underline cursor-pointer'>Shipping Policy</li>
            <li className='hover:underline cursor-pointer'>Return & Exchange</li>
          </ul>
        </div>
        <div className='h-full w-1/5 flex flex-col gap-6 mt-20 items-center'>
          <h1 className='font-bold text-2xl border-b-3 border-red-800'>Categories</h1>
          <ul className='flex flex-col gap-2'>
            <li className='hover:underline cursor-pointer'>Shop</li>
            <li className='hover:underline cursor-pointer'>Clearance Sale</li>
            <li className='hover:underline cursor-pointer'>New Arrivals</li>
            <li className='hover:underline cursor-pointer'>Breakfast Set</li>
            <li className='hover:underline cursor-pointer'>FRUITS</li>
            <li className='hover:underline cursor-pointer'>Collection</li>
            <li className='hover:underline cursor-pointer'>Heart Collection</li>
            <li className='hover:underline cursor-pointer'>Bulk Buy</li>
            <li className='hover:underline cursor-pointer'>ANIMAL</li>
          </ul>
        </div>
        <div className='h-full w-1/5 flex flex-col gap-6 mt-20 items-start '>
          <h1 className='font-bold text-2xl border-b-3 border-red-800'>Get in Touch</h1>
          <p><span className='font-semibold'>Address :</span>
            788, Global Industrial Area Sector 72, Faridabad</p>
          <p><span className='font-semibold'>Rahul Bhati :</span>+91 9311032091</p>
        </div>
        <div className=' w-1/5 flex flex-col gap-6 mt-20 items-start'>
        <h1 className='font-bold text-2xl border-b-3 border-red-800'> Map</h1>

        <LocationMap/>
        </div>
      </footer>
      <div className='w-full h-[60px] mt-4 text-[15px] text-gray-700'>
        <ul className='flex gap-8 items-center justify-center'>
          <li className='copyright'>2025,THE INDIAN HOME</li>
          <li>Refund policy</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
          <li>Shipping policy</li>
          <li>Contact information</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

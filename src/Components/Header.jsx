import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { FaLanguage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import logo from '../assets/logo1.png'

const Header = () => {
  return (
    <header className='h-20 flex items-center justify-evenly gap-30 bg-[#FAFFCA]'>
      <div className='h-20 w-20 '>
        <img className='rounded-full object-cover ml-[40px]' src={logo} alt="" />
      </div>
      <div>
        <ul className='flex gap-10 mt-[10px]'>
          <li>DECOR</li>
          <li>DRINKWARE</li>
          <li>TABLEWARE</li>
          <li>HOME  ESSENTIALS</li>
          <li>SALE COMBO</li>
          <li>WOMEN  ACCESORIES</li>
        </ul>
      </div>
      <div>
        <ul className='flex gap-[20px]'>
          <li className='flex gap-2'>
            <CiSearch className='mt-1' /> Search
          </li>
          <li className='flex gap-2'>
            <TiShoppingCart className='mt-1 mr-1' /> Order
          </li>
          <li className='flex gap-2'>
            <FaLanguage className='mt-1' /> Language
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

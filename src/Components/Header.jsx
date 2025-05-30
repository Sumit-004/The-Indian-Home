<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import { dataContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';
=======
import React, { useState } from 'react';
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
import { TiShoppingCart } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import logo from '../assets/logo1.png';

const Header = () => {
<<<<<<< HEAD
const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CartPage'); 
  };

  let { showSignIn, setShowSignIn, } = useContext(dataContext)


=======
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#FAFFCA] shadow-md">
<<<<<<< HEAD
      <div className="flex justify-between items-center h-20 px-6 md:px-10 md:mx-2 mx-4">
        {/* Logo */}
        <div className="h-16 w-16 md:h-20 md:w-20">
=======
      <div className="flex justify-between items-center h-20 px-6 md:px-10">
        {/* Logo */}
        <div className="h-12 w-12 md:h-20 md:w-20">
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
          <img className="rounded-full object-cover" src={logo} alt="Logo" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-6 text-sm font-medium">
            <li>DECOR</li>
            <li>DRINKWARE</li>
            <li>TABLEWARE</li>
            <li>HOME ESSENTIALS</li>
            <li>SALE COMBO</li>
            <li>WOMEN ACCESSORIES</li>
          </ul>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-sm w-64"
            />
          </div>

          {/* Order */}
<<<<<<< HEAD
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition-all duration-200" onClick={handleClick}>
            <TiShoppingCart className="text-2xl" />
=======
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition">
            <TiShoppingCart className="text-xl" />
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
            <span className="font-medium">Order</span>
          </div>

          {/* Sign In */}
<<<<<<< HEAD
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition-all duration-200" onClick={() => { setShowSignIn(true) }}>
=======
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition">
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
            <FaUser className="text-lg" />
            <span className="font-medium">Sign In</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
<<<<<<< HEAD
        <button className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
=======
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
<<<<<<< HEAD
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-[#FAFFCA] z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition" onClick={() => { setShowSignIn(true),toggleMenu(false) }}>
            <FaUser className="text-lg" />
            <span className="font-medium">Sign In</span>
          </div>
          <button className="text-2xl cursor-pointer" onClick={toggleMenu}>
=======
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-[#FAFFCA] z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <img className="h-10 w-10 rounded-full object-cover" src={logo} alt="Logo" />
          <button className="text-2xl" onClick={toggleMenu}>
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
            <HiX />
          </button>
        </div>

<<<<<<< HEAD
        {/* Mobile Search */}
        <div className="relative mt-4 px-4">
          <CiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-sm"
          />
        </div>

=======
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
        <ul className="flex flex-col gap-5 p-6 text-base font-medium">
          <li>DECOR</li>
          <li>DRINKWARE</li>
          <li>TABLEWARE</li>
          <li>HOME ESSENTIALS</li>
          <li>SALE COMBO</li>
          <li>WOMEN ACCESSORIES</li>
          <hr />
        </ul>

<<<<<<< HEAD

        {/* Mobile Icons */}
        <div className="flex flex-col gap-4 px-6 mt-2">
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition" onClick={handleClick}>
            <TiShoppingCart className="text-xl" />
            <span className="font-medium">Order</span>
          </div>
=======
        {/* Mobile Search */}
        <div className="relative mt-4 px-4">
          <CiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-sm"
          />
        </div>

        {/* Mobile Icons */}
        <div className="flex flex-col gap-4 px-6 mt-6">
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition">
            <TiShoppingCart className="text-xl" />
            <span className="font-medium">Order</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition">
            <FaUser className="text-lg" />
            <span className="font-medium">Sign In</span>
          </div>
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
        </div>
      </div>
    </header>
  );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b

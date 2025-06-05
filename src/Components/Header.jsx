import React, { useState, useContext ,useEffect} from 'react';
import { items } from '../items';
import { dataContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CartPage');
  };

  let { showSignIn, setShowSignIn, input, setInput, setCate } = useContext(dataContext)
useEffect(()=>{
        let newList=items.filter((item)=>item.description.includes(input)||item.description.toLowerCase().includes(input))
        setCate(newList)
    },[input])


  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const cart = useSelector(state => state.cart);

  return (
    <header className="fixed top-0 w-full z-20 bg-[#FAFFCA] shadow-md">
      <div className="flex justify-between items-center h-22 px-6 md:px-10 md:mx-3 mx-4">
        {/* Logo */}
        <div className="h-16 w-16 md:h-20 md:w-20">
          <img className="rounded-full object-cover" src={logo} alt="Logo" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-8 text-sm font-medium">
            <li>DECOR</li>
            <li>DRINKWARE</li>
            <li>TABLEWARE</li>
            <li>HOME ESSENTIALS</li>
            <li>SALE COMBO</li>
          </ul>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search Item"
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-sm w-64"
                onChange={(e) => setInput(e.target.value)} value={input} />
            </div>
          </form>
          {/* Order */}
          <div className="relative flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition-all duration-200" onClick={handleClick}>
            <TiShoppingCart className="text-2xl" />
            <span className='absolute -top-4 left-5 font-semibold'>{cart.length}</span>
            <span className="font-medium">Order</span>
          </div>

          {/* Sign In */}
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition-all duration-200" onClick={() => { setShowSignIn(true) }}>
            <FaUser className="text-lg" />
            <span className="font-medium">Sign In</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-[#FAFFCA] z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition" onClick={() => { setShowSignIn(true), toggleMenu(false) }}>
            <FaUser className="text-lg" />
            <span className="font-medium">Sign In</span>
          </div>
          <button className="text-2xl cursor-pointer" onClick={toggleMenu}>
            <HiX />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="relative mt-4 px-4">
          <CiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-sm"
          />
        </div>

        <ul className="flex flex-col gap-5 p-6 text-base font-medium">
          <li>DECOR</li>
          <li>DRINKWARE</li>
          <li>TABLEWARE</li>
          <li>HOME ESSENTIALS</li>
          <li>SALE COMBO</li>
          <hr />
        </ul>


        {/* Mobile Icons */}
        <div className="flex flex-col gap-4 px-6 mt-2">
          <div className="relative flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition" onClick={handleClick}>
            <TiShoppingCart className="text-xl" />
            <span className='absolute -top-2 left-4 text-[13px] font-semibold'>{cart.length}</span>
            <span className="font-medium">Order</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
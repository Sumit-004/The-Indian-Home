import React, { useState, useContext, useEffect } from 'react';
import { items } from '../items';
import { dataContext } from '../Context/PageContext'
import { useNavigate } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import { useSelector } from 'react-redux';
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const openLogin = () => navigate('/Login');
  const openAccount = () => navigate('/Account');
  const openCart = () => navigate('/CartPage');
  const cart = useSelector(state => state.cart);

  const {
    setShowSignIn,
    input,
    setInput,
    setItem,
    cateSelect,
    setCateSelect
  } = useContext(dataContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const newList = items.filter((item) =>
      item.description.toLowerCase().includes(input.toLowerCase())
    );
    setItem(newList);
  }, [input]);

  function choice(category) {
    const newList = items.filter((item) => item.item_category === category);
    setItem(newList);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 bg-[#FAFFCA] transition-all duration-300 ease-in-out ${isScrolled && !isOpen ? 'py-0 shadow-lg bg-opacity-90' : 'py-2 shadow-md'
      }`}>

      {/* Top Bar */}
      <div className="flex items-center justify-between md:h-20 h-17 px-4 md:px-10 md:mx-3 mx-2 space-x-4">

        {/* Logo */}
        <div className="h-14 w-14 md:h-25 md:w-25 flex-shrink-0">
          <img className="rounded-full object-cover" src={logo} alt="Logo" />
        </div>

        {/* Mobile Search (centered between logo and toggle) */}
        <form className="flex-grow md:hidden" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 text-sm"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
        </form>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl cursor-pointer flex-shrink-0" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop Nav & Icons */}
        <div className="hidden md:flex flex-grow justify-between items-center">
          {/* Nav Links */}
          <nav className="flex-grow flex justify-center">
            <ul className="flex gap-8 text-md">
              <li className="hover:text-gray-400 hover:scale-102 cursor-pointer hover:text ">HOME</li>
              <li className="hover:text-gray-400 hover:scale-102 cursor-pointer" onClick={() => { choice("ShowPiece"); setCateSelect(true) }}>HOME DECOR</li>
              <li className="hover:text-gray-400 hover:scale-102 cursor-pointer" onClick={() => { choice("CupSet"); setCateSelect(true) }}>CUPS & SET</li>
              <li className="hover:text-gray-400 hover:scale-102 cursor-pointer">TABLEWARE</li>
              <li className="hover:text-gray-400 hover:scale-102 cursor-pointer">BEST SELLER </li>
              <li className="hover:text-gray-400 hover:scale-102 cursor-pointer ">CONTACT </li>

            </ul>
          </nav>


          {/* Icons */}
          <div className="flex items-center gap-6">
            {/* Search (Desktop) */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search Item"
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-sm w-64"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
              </div>
            </form>

            {/* Order Cart */}
            <div className="relative flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition-all duration-200" onClick={openCart}>
              <TiShoppingCart className="text-2xl" />
              <span className="absolute -top-4 left-5 font-semibold">{cart.length}</span>
              <span className="font-medium">Order</span>
            </div>

            {/* Sign In */}
            {user ? (
              <>
                <span className='font-semibold text-emerald-800 cursor-pointer hover:scale-105 transition-all duration-300' onClick={openAccount}>Hello, {user.name}</span>
              </>
            ) : (<div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition-all duration-200" onClick={openLogin}>
              <FaUser className="text-lg" />
              <span className="font-medium">Sign In</span>
            </div>)}
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-[#FAFFCA] z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}>

        {user ? (<>
          <span className='font-semibold text-emerald-800 cursor-pointer hover:scale-105 transition-all duration-300' onClick={openAccount}>Hello, {user.name}</span>
        </>) : (<div className="flex justify-between items-center p-5 border-b">
          <div className="flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition" onClick={() => { toggleMenu(false) }}>
            <FaUser className="text-lg" />
            <span className="font-medium" onClick={openLogin}>Sign In</span>
          </div>
          <button className="text-2xl cursor-pointer" onClick={toggleMenu}>
            <HiX />
          </button>
        </div>)}


        {/* Mobile Search in Slide Menu (Optional) */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative mt-4 px-4">
            <CiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-sm"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
        </form>

        <ul className="flex flex-col gap-5 p-6 text-base font-medium">
          <li>HOME</li>
          <li>HOME DECOR</li>
          <li>CUPS & SET</li>
          <li>CONTACT</li>
          <hr />
        </ul>

        <div className="flex flex-col gap-4 px-6 mt-2">
          <div className="relative flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition" onClick={openCart}>
            <TiShoppingCart className="text-xl" />
            <span className="absolute -top-2 left-4 text-[13px] font-semibold">{cart.length}</span>
            <span className="font-medium">Order</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useContext, useEffect } from 'react';
import { items } from '../items';
import { dataContext } from '../Context/PageContext'
import { useNavigate } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";
import logo from '../assets/logo1.png';
import { useSelector } from 'react-redux';
import { useAuth } from "../Context/AuthContext";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const openLogin = () => navigate('/Login');
  const openAccount = () => navigate('/Account');
  const openCart = () => navigate('/CartPage');
  const cart = useSelector(state => state.cart);

const handleLogoutAndRedirect = async () => {
        try {
            await logout(); 
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
  const {
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


  const filteredSuggestions = input ? items.filter((item) =>
    item.description.toLowerCase().includes(input.toLowerCase())
  )
    : [];

  return (
    <header className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ease-in-out ${isScrolled && !isOpen ? 'py-0 shadow-lg bg-opacity-90' : 'py-2 '
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
              value={input} />
            {input.trim() && (
              <div className="absolute left-4 right-4 z-20 bg-white shadow-lg rounded max-h-60 overflow-y-auto mt-1 border border-gray-300">
                {filteredSuggestions.length > 0 ? (
                  <ul>
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setInput(suggestion.description);
                          setItem([suggestion]);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        {suggestion.description}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">No items found</div>
                )}
              </div>
            )}
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
            <ul className='flex gap-8 text-md text-gray-800'>
              <NavLink to='/' className='flex flex-col items-center gap-0'>
                <p>HOME</p>
                <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
              </NavLink>
              <NavLink to='/bestseller' className='flex flex-col items-center gap-0'>
                <p>BEST SELLER</p>
                <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
              </NavLink>
              <NavLink to='/contact' className='flex flex-col items-center gap-0'>
                <p>CONTACT</p>
                <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
              </NavLink>
              {/* <NavLink className='flex flex-col items-center gap-0'>
                <p onClick={() => { choice("CupSet"); setCateSelect(true) }}>CONTACT</p>
                <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
              </NavLink> */}
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

                {/* Suggestions Dropdown */}
                {input && (
                  <div className="absolute z-20 bg-white shadow-lg rounded w-full max-h-60 overflow-y-auto mt-1 border border-gray-300">
                    {filteredSuggestions.length > 0 ? (
                      <ul>
                        {filteredSuggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              setInput(suggestion.description);
                              setItem([suggestion]);
                            }}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          >
                            {suggestion.description}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="px-4 py-2 text-sm text-gray-500">No items found</div>
                    )}
                  </div>
                )}

              </div>
            </form>

            {/* Order Cart */}
            <div className="relative flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition-all duration-200" onClick={openCart}>
              <TiShoppingCart className="text-2xl" />
              <span className="absolute -top-4 left-5 font-semibold">{cart.length}</span>
              <span className="font-medium">Order</span>
            </div>

            {/* Sign In */}
            <div className=" group relative flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition-all duration-200" onClick={openLogin}>
              <FaUser className="text-lg" />
              {user ? (<span className="font-medium">{user.name}</span>
              ) : (<span className="font-medium">Sign In</span>
              )}
              <div className='group-hover:block hidden absolute dropdown-menu -right-8 pt-4 top-6'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  <p className='cursor-pointer hover:text-black flex items-center gap-1.5'><CgProfile/>My Profile</p>
                  <p className='cursor-pointer hover:text-black flex items-center gap-1.5'><BsBoxSeam/>My Orders</p>
                  <p className='cursor-pointer hover:text-black flex items-center gap-1.5' onClick={logout}><FaSignOutAlt/>Logout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-full bg-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}>

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

        <ul className="flex flex-col gap-5 p-6 text-base font-medium">
          <li className='hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer'>HOME</li>
          <li className='hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer'>YOUR PROFILE</li>
          <li className='hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer'>HOME DECOR</li>
          <li className='hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer'>CUPS & SET</li>
          <li className='hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer'>CONTACT</li>
          <hr />
        </ul>

        <div className="flex flex-col gap-4 px-6 mt-2">
          <div className="relative flex gap-2 items-center cursor-pointer hover:text-yellow-700 transition" onClick={openCart}>
            <TiShoppingCart className="text-xl" />
            <span className="absolute -top-2 left-4 text-[13px] font-semibold">{cart.length}</span>
            <span className="font-medium">Order</span>
          </div>
          <button
            type="button"
            className="bg-red-500 md:text-[15px] text-[13px] px-2 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2 cursor-pointer"
            onClick={handleLogoutAndRedirect}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useContext, useEffect } from 'react';
import { dataContext } from '../Context/PageContext';
import { TiShoppingCart } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { FaAngleDown } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { HiX } from 'react-icons/hi';
import { IoSearch } from "react-icons/io5";
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";
import logo from '../assets/logo1.png';
import { NavLink, Link } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from 'react-hot-toast';
import axios from "axios";

const Navbar = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [showSearch, setShowSearch] = useState(false);

  const {
    input, setInput,
    showDropdown, setShowDropdown,
    category, setCategory,
    navigate, token, setToken,
    getCartCount, products,
  } = useContext(dataContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    toast.success('User Logged out Successfully');
    navigate('/login');
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filterSuggestions = () => {
    if (!products || !Array.isArray(products)) return;

    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) {
      setFilterProducts([]);
      return;
    }

    const filtered = products.filter(product =>
      product.description.toLowerCase().includes(trimmedInput)
    );

    setFilterProducts(filtered);
  };


  useEffect(() => {
    filterSuggestions();
  }, [input, products]);



  return (
    <header className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ease-in-out ${isScrolled && !isOpen ? 'py-0 shadow-lg bg-opacity-90' : 'py-2 '}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full md:h-20 h-17 pl-2 md:px-10 md:mx-3 ml-2 space-x-4">

        {/* Logo */}
        <div className="h-16 w-16 md:h-25 md:w-25 flex-shrink-0">
          <img className="rounded-full object-cover" src={logo} alt="Logo" />
        </div>

        {/* Mobile Search */}

        <form className="w-full relative md:hidden" onSubmit={(e) => e.preventDefault()}>
          {showSearch && (
            <div className="w-full">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-2 py-2 rounded-full border bg-white border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              {input.trim() && (
                <div className="absolute left-4 right-4 z-20 bg-white shadow-lg rounded max-h-60 overflow-y-auto mt-1 border border-gray-300">
                  {filterProducts.length > 0 ? (
                    <ul>
                      {filterProducts.map((suggestion, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setInput(suggestion.description);
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
          )}
        </form>


        <div onClick={() => setShowSearch(!showSearch)} className='flex md:hidden justify-end text-xl font-semibold cursor-pointer'>
          <div className={`transition-all duration-200 ease-in-out absolute ${showSearch ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} pointer-events-none`}>
            <HiX />
          </div>
          <div className={`transition-all duration-200 ease-in-out ${showSearch ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <IoSearch />
          </div>
        </div>

        {/* Mobile Cart Icon */}
        <div className="md:hidden relative items-center cursor-pointer hover:text-blue-900 transition" onClick={() => navigate('/CartPage')}>
          <TiShoppingCart className="text-2xl" />
          <span className="absolute -top-2.5 left-5 text-[13px] font-semibold">{getCartCount()}</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl cursor-pointer flex-shrink-0" onClick={toggleMenu}>
          <CgMenuRight className='hover:scale-105 transition-all duration-200' />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-grow justify-between items-center">
          <nav className="relative flex-grow flex justify-center">
            <ul className='flex gap-8 text-md text-gray-800'>
              <NavLink to='/' className='flex flex-col items-center gap-0'><p>HOME</p></NavLink>
              <NavLink to='/bestseller' className='flex flex-col items-center gap-0'><p>BEST SELLER</p></NavLink>
              <p onClick={() => setShowDropdown(!showDropdown)} className=' flex text-md text-gray-800 items-center cursor-pointer gap-1'>CATEGORIES<FaAngleDown /></p>
              {showDropdown && (
                <ul
                  className="absolute z-10 mt-8 ml-40 bg-white border-l border-r border-b border-gray-300 rounded shadow-md w-55 text-center">
                  <li onClick={() => setCategory('teaset')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Morning Tea Sets</li>
                  <li onClick={() => setCategory('jars')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ceramics Jars</li>
                  <li onClick={() => setCategory('coffeemugs')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Coffee Mugs</li>
                  <li onClick={() => setCategory('vases')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Vases</li>
                  <li onClick={() => setCategory('showpiece')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Showpieces</li>
                </ul>
              )}
              <NavLink to='/contact' className='flex flex-col items-center gap-0'><p>CONTACT</p></NavLink>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6">
            {/* Desktop Search */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search Item"
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200 shadow-sm w-64"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                {input && (
                  <div className="absolute z-20 bg-white shadow-lg rounded w-full max-h-60 overflow-y-auto mt-1 border border-gray-300">
                    {filterProducts.length > 0 ? (
                      <ul>
                        {filterProducts.map((suggestion, index) => (
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

            {/* Cart */}
            <div className="relative flex gap-2 items-center cursor-pointer hover:text-blue-900 transition-all duration-200" onClick={() => navigate('/CartPage')}>
              <TiShoppingCart className="text-2xl" />
              <span className="absolute -top-4 left-5 font-semibold">{getCartCount()}</span>
              <span className="font-medium">Order</span>
            </div>

            {/* User Menu */}
            <div className="group relative flex gap-2 items-center cursor-pointer hover:text-blue-900 transition-all duration-200">
              <p className='flex items-center gap-2'>
                {token ? '' : <FaUser className="text-lg" />}
                <span onClick={() => token ? null : navigate('/login')} className="font-semibold">{token ? '👤 User Menu' : 'Sign in'}</span>
              </p>
              {token && (
                <div className='group-hover:block hidden absolute dropdown-menu -right-8 pt-4 top-6'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    {/* <p className='cursor-pointer hover:text-black flex items-center gap-1.5'><CgProfile />My Profile</p> */}
                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black flex items-center gap-1.5'><BsBoxSeam />My Orders</p>
                    <p className='cursor-pointer hover:text-red-600 flex items-center gap-1.5' onClick={logout}><FaSignOutAlt />Logout</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`md:hidden h-[100vh] absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${isOpen ? 'w-full' : 'w-0'}`}>
        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex gap-2 items-center cursor-pointer hover:text-blue-900 transition">
            {token ? '' : <FaUser className="text-lg" />}
            <span onClick={() => token ? null : navigate('/login')} className="font-medium">{token ? '👤 User' : 'Sign in'}</span>
          </div>
          <button className="text-2xl cursor-pointer" onClick={toggleMenu}><HiX /></button>
        </div>
        <ul className='flex flex-col gap-6 ml-4 text-md text-gray-800 my-4'>
          <NavLink onClick={toggleMenu} to='/'><p>HOME</p></NavLink>
          <NavLink onClick={toggleMenu} to='/bestseller'><p>BEST SELLER</p></NavLink>
          <p onClick={() => setShowDropdown(!showDropdown)} className='flex items-center gap-4 cursor-pointer'>CATEGORY<FaAngleDown /></p>
          {showDropdown && (
            <ul className="mt-1 -ml-4 bg-white border-t border-b border-gray-300 rounded w-full">
              <NavLink onClick={toggleMenu} to='/'><li onClick={() => setCategory('teaset')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Morning Tea Set</li></NavLink>
              <NavLink onClick={toggleMenu} to='/'><li onClick={() => setCategory('vases')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Vases</li></NavLink>
              <NavLink onClick={toggleMenu} to='/'><li onClick={() => setCategory('showpiece')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Showpieces</li></NavLink>
              <NavLink onClick={toggleMenu} to='/'><li onClick={() => setCategory('coffeemugs')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Coffee Mugs</li></NavLink>
              <NavLink onClick={toggleMenu} to='/'><li onClick={() => setCategory('jars')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ceramics Jars</li></NavLink>
            </ul>
          )}
          <NavLink onClick={toggleMenu} to='/contact'><p>CONTACT</p></NavLink>
        </ul>
        <hr />
        <div className='flex flex-col items-center gap-3 w-full fixed bottom-4'>
          <p className='hover:text-red-600 cursor-pointer font-semibold text-[15px] flex gap-1 items-center'><RiDeleteBinLine />Delete Account</p>
          <button
            type="button"
            className="text-red-700 bg-gray-300 font-semibold w-20 text-[15px] px-2 py-2 rounded-lg hover:bg-gray-400 flex items-center gap-2 cursor-pointer"
            onClick={logout}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react'
import Login from './Pages/Login/Signin'
import Account from './Pages/Account'
import Profile from './FrontendComponents/ProfileInfo'
import Cart from './Pages/Cart'
import AllItem from './Pages/AllItem';
import HomePage from './Pages/HomePage'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
    const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
  
    <>
    
      <Toaster position='top-center' reverseOrder={true} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/CartPage" element={<Cart />} />
        <Route path="/AllItem" element={<AllItem />} />
      </Routes>

    </>
  )
}

export default App

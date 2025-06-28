import React from 'react'
import Navbar from './FrontendComponents/Navbar'
import Footer from './FrontendComponents/Footer'
import Login from './Pages/Login/Signin'
// import Profile from './FrontendComponents/ProfileInfo'
import Orders from './Pages/Orders'
import Cart from './Pages/Cart'
import BestSeller from './Pages/BestSeller'
import AllItem from './Pages/AllItem';
import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact'
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import PlaceOrder from './Pages/PlaceOrder'
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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/CartPage" element={<Cart />} />
        <Route path="/AllItem" element={<AllItem />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import CartPage from './Pages/CartPage'
import AllItem from './Pages/AllItem';
import HomePage from './Pages/HomePage'
import ScrollToTop from './Components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Toaster position='top-center' reverseOrder={true} />

      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/AllItem" element={<AllItem />} />
      </Routes>

      

    </>
  )
}

export default App

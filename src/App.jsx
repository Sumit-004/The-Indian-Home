import React from 'react'
import CartPage from './Pages/CartPage'
import AllItem from './Pages/AllItem';
import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Routes>
      
        <Routes>
          <Route path="/AllItem" element={<AllItem />} />
        </Routes>
    </>
  )
}

export default App

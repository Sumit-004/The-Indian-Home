import React from 'react'
<<<<<<< HEAD
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import HomePage from './Pages/HomePage'
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b


const App = () => {
  return (
    <>
<<<<<<< HEAD
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Routes>
      
=======
       <HomePage/>
        
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
    </>
  )
}

export default App

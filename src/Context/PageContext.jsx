import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
export const dataContext = createContext()

function PageContext({ children }) {

  let [showSignIn, setShowSignIn] = useState(true)
  let [showRegister, setShowRegister] = useState(false)
  let [category, setCategory] = useState('');
  let [input, setInput] = useState("")
  const [showDropdown, setShowDropdown] = useState(false);
  let [token, setToken] = useState("")
  let [showCart, setShowCart] = useState(false)
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState({})
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const delivery_fee = 20;

  const addToCart = async (itemId) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCartItems(updatedCart);

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', { itemId }, { headers: { token } })
        toast.success('Order Placed')
      } catch (error) {
        console.log(error);
        toast.error(error.message)

      }
    }
  };

  const getCartCount = () => {

    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  }


  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list',);

      if (response.data.success) {
        setProducts(response.data.products)

      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
      if (response.data.success) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  useEffect(() => {
    getProductsData()
  }, [])

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'))
    }
  }, [])


  const updateQuantity = async (itemId, quantity) => {

    const updated = { ...cartItems };
    if (quantity <= 0) {
      delete updated[itemId];
    } else {
      updated[itemId] = quantity;
    }
    setCartItems(updated);

    if (token) {

      try {
        await axios.post(backendUrl + '/api/cart/update', { itemId, quantity }, { headers: { token } })

      } catch (error) {
        console.log(error);
        toast.error(error.message)

      }
    }
  };


  const getCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = products.find(p => p._id === itemId);
      if (product) {
        total += product.price * cartItems[itemId];
      }
    }
    return total;
  }


  


  let data = {
    delivery_fee,
    input, setInput,
    showSignIn, setShowSignIn,
    showRegister, setShowRegister,
    showCart, setShowCart,
    navigate,
    backendUrl,
    token, setToken,
    products, setProducts,
    cartItems, setCartItems,
    showDropdown, setShowDropdown,
    addToCart, getCartCount, updateQuantity, getCartAmount,
    category, setCategory
  }
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </div>
  )
}

export default PageContext

import React, { createContext, useState } from 'react'
import { items } from '../items'
export const dataContext = createContext()

function UserContext({ children }) {
  let [showSignIn, setShowSignIn] = useState(true)
  let [showRegister, setShowRegister] = useState(false)
  let [item, setItem] = useState(items)
  let [input, setInput] = useState("")
  let [cateSelect, setCateSelect] = useState(false)
  let [showCart, setShowCart] = useState(false)

  let data = {
    input,setInput,
    showSignIn,setShowSignIn,
    showRegister,setShowRegister,
    item, setItem,
    showCart,setShowCart,
    cateSelect,setCateSelect,
    
  }
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </div>
  )
}

export default UserContext

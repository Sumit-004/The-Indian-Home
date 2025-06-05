import React, { createContext, useState } from 'react'
import { items } from '../items'
// import { newItem } from '../newItem'


export const dataContext = createContext()

function UserContext({ children }) {
  let [showSignIn, setShowSignIn] = useState(false)
  let [showRegister, setShowRegister] = useState(false)
  let [cate, setCate] = useState(items)
      let [input,setInput]=useState("") 

  // let [newCate, setNewCate] = useState(newItem)
  let [showCart, setShowCart] = useState(false)

  let data = {
    input,
    setInput,
    showSignIn,
    setShowSignIn,
    showRegister,
    setShowRegister,
    cate,
    setCate,
    showCart, 
    setShowCart,
    // newCate,
    // setNewCate,
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

import React, { createContext, useReducer } from 'react'
import CartSlice from '../redux/CartSlice'

export const CartContext = createContext()

const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartSlice, [])
  return (
    <CartContext.Provider value={{cart, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider
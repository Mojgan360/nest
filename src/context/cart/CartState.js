import React, { useReducer } from 'react'
import CartContext from './cartContext'
import cartReducer from './cartReducer'
const CartState = ({ children }) => {
  const initialState = {
    cart: [],
  }
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  )
}

export default CartState

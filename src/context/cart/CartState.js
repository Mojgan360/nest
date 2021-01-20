import React, { useReducer } from 'react'
import CartContext from './cartContext'
import cartReducer from './cartReducer'
import { ADD_TO_CART } from '../../actions'

const CartState = ({ children }) => {
  const initialState = {
    cart: [],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 645,
  }
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartState

import React, { useReducer, useEffect } from 'react'
import CartContext from './cartContext'
import cartReducer from './cartReducer'
import { ADD_TO_CART, REMOVE_CART_ITEM, CLEAR_CART } from '../../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 645,
}

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }
  const toggleAmount = (id, value) => {
    console.log(id, value)
  }
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
    console.log('clean up')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartState

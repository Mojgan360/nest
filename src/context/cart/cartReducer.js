import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../../actions'

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload
    const tempItem = state.cart.find((i) => i.id === id + color)
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].fields.file.url,
        price: product.price,
        max: product.stock,
      }
      // console.log(newItem)
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tmpCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: tmpCart }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    return { ...state }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cartReducer

import { ADD_TO_CART } from '../../actions'

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
      console.log(newItem)
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cartReducer

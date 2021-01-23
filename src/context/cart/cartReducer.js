import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
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
    const { id, value } = action.payload
    // eslint-disable-next-line array-callback-return
    const tmpCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1
          if (newAmount > item.max) {
            newAmount = item.max
          }
          return { ...item, amount: newAmount }
        }
        if (value === 'dec') {
          let newAmount = item.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...item, amount: newAmount }
        }
      } else {
        return item
      }
    })

    return { ...state, cart: tmpCart }
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        //code...
        const { amount, price } = cartItem

        total.total_items += amount
        total.total_amount += price * amount

        //code ...
        //alltid return total
        return total
      }, //return en object - total_items=0, total_amount=0
      {
        total_items: 0,
        total_amount: 0,
      }
    )
    return { ...state, total_items, total_amount }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cartReducer

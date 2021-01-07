import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  const { type, payload } = action
  if (type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  if (type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (type === GET_PRODUCTS_SUCCESS) {
    const featured_products = payload.filter(
      (product) => product.featured === true
    )
    if (type === GET_PRODUCTS_ERROR) {
      return { ...state, products_loading: false, products_error: true }
    }
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state }
  }

  return state
  // eslint-disable-next-line no-unreachable
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer

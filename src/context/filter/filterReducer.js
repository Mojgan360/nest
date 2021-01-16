import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  FILTER_PRODUCTS,
} from '../../actions'

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { sort, filtered_products } = state
    let tmp = [...filtered_products]
    if (sort === 'all-products') {
      tmp = filtered_products
    }
    if (sort === 'price-lowest') {
      tmp = tmp.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      tmp = tmp.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      tmp = tmp.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sort === 'name-z') {
      tmp = tmp.sort((a, b) => b.name.localeCompare(a.name))
    }

    return { ...state, filtered_products: tmp }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filterReducer

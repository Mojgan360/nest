import { LOAD_PRODUCTS } from '../../actions'

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filterReducer

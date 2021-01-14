import React, { useReducer, useEffect } from 'react'
import FilterContext from './filterContext'
import filterReducer from './filterReducer'
import { useProductsContext } from '../products_context'
import { LOAD_PRODUCTS } from '../../actions'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: false,
}

const FilterState = ({ children }) => {
  const { products } = useProductsContext()

  const [state, dispatch] = useReducer(filterReducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}
export default FilterState

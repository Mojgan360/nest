import React, { useReducer, useEffect } from 'react'
import FilterContext from './filterContext'
import filterReducer from './filterReducer'
import { useProductsContext } from '../products_context'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from '../../actions'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: false,
  sort: 'all-products',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}

const FilterState = ({ children }) => {
  const { products } = useProductsContext()

  const [state, dispatch] = useReducer(filterReducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort, state.filters])

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }
  const updateSort = (e) => {
    // for demonstration
    // const name = e.target.name
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }
  const updateFilters = (e) => {
    const name = e.target.name
    const value = e.target.value
    // console.log(name, value)
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  )
}
export default FilterState

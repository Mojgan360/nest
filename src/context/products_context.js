import React, { useContext, useReducer } from 'react'
import axios from 'axios'

import { products_url as url } from '../utils/constants'
import reducer from '../reducers/products_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }
  const fetchProduct = async (url) => {
    try {
      const response = await axios.get(url)
      console.log(response.data)
    } catch (error) {}
  }
  React.useEffect(() => {
    fetchProduct(url)
  }, [])

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  )
}
// attention here
export const useProductsContext = () => {
  return useContext(ProductsContext)
}

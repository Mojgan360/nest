import React, { useContext } from 'react'

const initialState = {}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value='Product context'>
      {children}
    </ProductsContext.Provider>
  )
}
// attention here
export const useProductsContext = () => {
  return useContext(ProductsContext)
}

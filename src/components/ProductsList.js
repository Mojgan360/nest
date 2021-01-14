import React, { useContext } from 'react'
import FilterContext from '../context/filter/filterContext'
import GridViews from './GridViews'
const ProductsList = () => {
  const filterContext = useContext(FilterContext)
  const { filtered_products: products } = filterContext
  return (
    <div>
      <h1>ProductsList</h1>
      <GridViews products={products}>GridViews</GridViews>
    </div>
  )
}

export default ProductsList

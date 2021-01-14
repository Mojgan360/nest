import React, { useContext } from 'react'
import FilterContext from '../context/filter/filterContext'

const ProductsList = () => {
  const filterContext = useContext(FilterContext)
  const { filtered_products: products } = filterContext
  return (
    <div>
      <h1>ProductsList</h1>
    </div>
  )
}

export default ProductsList

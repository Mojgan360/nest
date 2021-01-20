import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import AlertState from './context/alert/AlertState'
import FilterState from './context/filter/FilterState'
import CartState from './context/cart/CartState'

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterState>
        <CartState>
          <AlertState>
            <App />
          </AlertState>
        </CartState>
      </FilterState>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

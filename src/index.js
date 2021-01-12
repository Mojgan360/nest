import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import AlertState from './context/alert/AlertState'

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <AlertState>
        <App />
      </AlertState>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import AlertState from './context/alert/AlertState'
import FilterState from './context/filter/FilterState'
import CartState from './context/cart/CartState'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain='mojgan360.eu.auth0.com'
    clientId='Js6a4V4WGLHPqMKpm0kf6VQBa4qPqGI1'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
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
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
)

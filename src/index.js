import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import AlertState from './context/alert/AlertState'
import FilterState from './context/filter/FilterState'
import CartState from './context/cart/CartState'
import UserState from './context/user/UserState'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain='mojgan360.eu.auth0.com'
    clientId='mcGwZiKAdH4HbWFl2PrMIH21RNjEU4Qj'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    {/* <React.StrictMode> */}
    <UserState>
      <ProductsProvider>
        <FilterState>
          <CartState>
            <AlertState>
              <App />
            </AlertState>
          </CartState>
        </FilterState>
      </ProductsProvider>
    </UserState>
    {/* </React.StrictMode> */}
  </Auth0Provider>,
  document.getElementById('root')
)

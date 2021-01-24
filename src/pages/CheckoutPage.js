import React, { useContext } from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import CartContext from '../context/cart/cartContext'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const cartContext = useContext(CartContext)
  const { cart } = cartContext
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div``
export default CheckoutPage

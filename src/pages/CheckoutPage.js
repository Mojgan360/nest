import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import CartContext from '../context/cart/cartContext'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const cartContext = React.useContext(CartContext)
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
          <Link href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard
          </Link>
        )}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`
export default CheckoutPage

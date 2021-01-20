import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CartContext from '../context/cart/cartContext'
import { PageHero } from '../components'

const CartPage = () => {
  const cartContext = useContext(CartContext)
  const { cart } = cartContext
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <main>
      <PageHero title='cart' />
      <Wrapper className='page'></Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage

import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <h1>checkout here</h1>
        <h3 style={{ color: 'red' }}>
          it is not yet finished and still working on it
        </h3>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage

import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import Loading from './Loading'
import Error from './Error'

const FeaturedProducts = () => {
  const {
    featured_products: featured,
    products_loading: loading,
    products_error: error,
  } = useProductsContext()
  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <Wrapper>
      FeaturedProducts
      {featured.map(({ id, name }) => {
        return <p key={id}>{name}</p>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts

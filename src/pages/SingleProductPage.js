import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { PageHero } from '../components'

import { useProductsContext } from '../context/products_context'

const SingleProductPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(id)
  }, [id])
  //    stock, stars,reviews,id: sku,
  const { name } = product
  console.log(product)

  return (
    <Wrapper>
      <h1>Single Product {name}</h1>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage

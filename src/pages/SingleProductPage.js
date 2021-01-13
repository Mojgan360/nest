import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Loading, Error, PageHero, ProductImages, Stars } from '../components'

import { useProductsContext } from '../context/products_context'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
    fetchSingleProduct(`${id}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  useEffect(() => {
    // console.log(error)
    if (error)
      setTimeout(() => {
        history.push('/')
      }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])
  if (loading) return <Loading />
  if (error) return <Error msg='Somthing Not working..., Try again' />

  const {
    id: sku,
    name,
    price,
    company,
    category,
    description,
    shipping,
    stock,
    des,
  } = product

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className=' product-center'>
          <ProductImages />
          <section className='content'>
            <h2>{name}</h2>
            <Stars />
            <h5 className='price'> {price}</h5>

            <h5> {documentToReactComponents(description)} </h5>
          </section>
        </div>
      </div>
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

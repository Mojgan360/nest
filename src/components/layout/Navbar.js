import React from 'react'
import styled from 'styled-components'
import nestLogo from '../../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../../utils/constants'

const Navbar = () => {
  const navLinks = links.map((item) => {
    const { id, text, url } = item
    return (
      <li key={id}>
        <Link path={url}>{text}</Link>
      </li>
    )
  })

  const logo = <img src={nestLogo} alt='nest store' />
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>{logo}</Link>
          <button type='button' className='nav-toggle' onClick=''>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>{navLinks}</ul>
      </div>
    </NavContainer>
  )
}

export default Navbar
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
      font-size: 2rem;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        list-style-type: none;
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        text-decoration: none;

        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
`

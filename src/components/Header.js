import '../styles/Header.css';
import React, { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import pages from './Links/Pages'
import UserMenu from './UserMenu';
import CartWidget from './CartWidget';

const navLinks = (page) => <LinkRouter className='NavBar-Links br3 xpad-5' to={page.to} key={page.name}>{page.name}</LinkRouter>
const userLinks = (page) => <LinkRouter className='NavBar-Links font-s Links-Red br3' to={page.to} key={page.name}>{page.name}</LinkRouter>

function Header() {
  const [openNav, setOpenNav] = useState(false)
  const [openUser, setOpenUser] = useState(false)

  const handleOpenNavMenu = () => {
    if (openNav == true) {
      setOpenNav(false)
    } else {
      setOpenNav(true)
    }
  }

  const userMenu = [
    { name: 'Perfil', to: '/auth/perfil' },
    { name: 'Loguéate', to: '/auth/signin' },
    { name: 'Registrarse', to: '/auth/signup' }
  ]

  
  return (
    <>
      <header className='NavBar NavBar-Links w100'>
        {/* Mobile */}
        <button className='Hide-Desktop bg-dark br-none' onClick={handleOpenNavMenu}>
          <img className='Burger-IMG Hide-Nav-Burger justify-start' src='/MenuBurger.png'/>
          {
            openNav ?
              <nav className='Col-Menu col w25 align-start'>
                {pages.map(navLinks)}
              </nav> : null
          }
        </button>
        <LinkRouter to='/' className='Logo-Mobile-Container align-start justify-center'>
          <img className='Logo-Mobile' src='/LogoSportacus01-Light.png' alt='logoSportacus' />
        </LinkRouter>

        {/* Desktop */}
        <LinkRouter to='/' className='Logo-Desktop-Container Hide-Nav-Desktop justify-center'>
          <img className='Logo-Desktop' src='/LogoNav02-Light.png' alt='logoSportacus' />
        </LinkRouter>
        <nav className='Row-Menu row w50 justify-center'>
          {pages.map(navLinks)}
        </nav>

        {/* Cart/Users */}
        <div className='justify-end row w25'>
          <LinkRouter to='carrito' className='CartLink'><CartWidget/></LinkRouter>
          <UserMenu/>
        </div>
      </header>
    </>
  )
}

export default Header
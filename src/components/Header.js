import '../styles/Header.css';
import React, { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Productos', to: '/productos' },
  { name: 'Alquileres', to: '/alquileres' },
  { name: 'Comunidad', to: '/comunidad' },
  { name: 'Contacto', to: '/contacto' },
]

const userMenu = [
  { name: 'Loguéate', to: '/auth/signin' },
  { name: 'Registrarse', to: '/auth/signup' }
]

const navLinks = (page) => <LinkRouter className='NavBar-Links Menu-Hover' to={page.to} key={page.name}>{page.name}</LinkRouter>
const userLinks = (page) => <LinkRouter className='NavBar-Links Avatar-Links' to={page.to} key={page.name}>{page.name}</LinkRouter>

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

  const handleOpenUserMenu = () => {
    if (openUser == true) {
      setOpenUser(false)
    } else {
      setOpenUser(true)
    }
  }

  return (
    <>
      <header className='NavBar NavBar-Links w100'>
        {/* Mobile */}
        <nav className='Col-Menu col w25 align-start'>
          {pages.map(navLinks)}
        </nav>
        <div className='Logo-Mobile-Container align-start justify-center'>
          <img className='Logo-Mobile' src='/LogoSportacus01-Light.png' alt='logoSportacus' />
        </div>

        {/* Desktop */}
        <div className='Logo-Desktop-Container justify-center'>
          <img className='Logo-Desktop' src='/LogoNav02-Light.png' alt='logoSportacus' />
        </div>
        <nav className='Row-Menu row w50 justify-center'>
          {pages.map(navLinks)}
        </nav>

        {/* Cart/Users */}
        <div className='User-Menu row w25'>
          <div>Carrito</div>
          <div>
            {userMenu.map(userLinks)}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
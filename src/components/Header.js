import '../styles/Header.css';
import React, { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import pages from './Links/Pages'

const userMenu = [
  { name: 'Loguéate', to: '/auth/signin' },
  { name: 'Registrarse', to: '/auth/signup' }
]

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
        <button className='Hide-Desktop bg-dark br-none' onClick={handleOpenNavMenu}>
          <img className='Burger-IMG Hide-Nav-Burger justify-start' src='/MenuBurger.png' />
          {
            openNav ?
              <nav className='Col-Menu col w25 align-start'>
                {pages.map(navLinks)}
              </nav> : null
          }
        </button>
        <div className='Logo-Mobile-Container align-start justify-center'>
          <img className='Logo-Mobile' src='/LogoSportacus01-Light.png' alt='logoSportacus' />
        </div>

        {/* Desktop */}
        <div className='Logo-Desktop-Container Hide-Nav-Desktop justify-center'>
          <img className='Logo-Desktop' src='/LogoNav02-Light.png' alt='logoSportacus' />
        </div>
        <nav className='Row-Menu row w50 justify-center'>
          {pages.map(navLinks)}
        </nav>

        {/* Cart/Users */}
        <div className='justify-center row w25'>
          <button className='bg-dark br-none' onClick={handleOpenUserMenu}>
            <img className='Burger-IMG br3' src='https://icon-library.com/images/user-icon-png-transparent/user-icon-png-transparent-17.jpg' />
            {
              openUser ?
                <nav className='User-Menu align-end gap-5'>
                  {userMenu.map(userLinks)}
                </nav> : null
            }
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
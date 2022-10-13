import '../styles/Header.css';
import React, { useState, useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import pages from './Links/Pages'
import pagesAdmin from './Links/PagesAdmin';
import UserMenu from './UserMenu';
import { useDispatch, useSelector } from 'react-redux';

const navLinks = (page) => <LinkRouter className='NavBar-Links br3 xpad-5' to={page.to} key={page.name}>{page.name}</LinkRouter>
const userLinks = (page) => <LinkRouter className='NavBar-Links font-s Links-Red br3' to={page.to} key={page.name}>{page.name}</LinkRouter>

function Header() {
  const userRedux = useSelector(state => state.user.u);
  const [openNav, setOpenNav] = useState(false)
  const [openUser, setOpenUser] = useState(false)
  const [role, setRole]=useState('')
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

  useEffect(()=>{
     localStorage.getItem("user")?
     setRole(JSON.parse(localStorage.getItem("user")).role):setRole('Visitor')  
},[])
console.log(role)

  return (
    <>
      <header className='NavBar NavBar-Links w100'>
        {/* Mobile */}
        <button className='Hide-Desktop bg-dark br-none' onClick={handleOpenNavMenu}>
          <img className='Burger-IMG Hide-Nav-Burger justify-start' src='/MenuBurger.png' />
          {
            openNav ?
              <nav className='Col-Menu col w25 align-start'>
                {userRedux?userRedux.role==='admin'?(pagesAdmin.map(navLinks)):(pages.map(navLinks)):(pages.map(navLinks))}
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
        {userRedux?userRedux.role==='admin'?(pagesAdmin.map(navLinks)):(pages.map(navLinks)):(pages.map(navLinks))}
        </nav>

        {/* Cart/Users */}
        <div className='justify-end row w25'>
          <UserMenu />
        </div>
      </header>
    </>
  )
}

export default Header
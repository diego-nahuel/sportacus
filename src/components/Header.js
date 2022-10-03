import '../styles/Header.css';
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Productos', to: '/productos' },
  { name: 'Alquileres', to: '/alquileres' },
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
      <div className='NavBar NavBar-Links'>
        <div>Logo</div>

        <div className='Row-Menu row'>
          {pages.map(navLinks)}
        </div>

        <div className='Row-Menu row'>
          <div>Carrito</div>
          <div>Usuarios</div>
        </div>
      </div>
    </>
  )
}

export default Header
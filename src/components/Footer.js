import React from 'react';
import '../styles/Footer.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function Footer() {
  function ScrollTop(){
    window.scrollTo({top:0, behavior: 'smooth'})
  }
  return (
    <footer className='Footer'>
      <LinkRouter to='/' className='Inicio-link'> Inicio </LinkRouter>
      <LinkRouter to='/contacto' className='Contacto-link'> Contacto </LinkRouter>
    </footer>
  )
}

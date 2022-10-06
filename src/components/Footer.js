import React from 'react';
import '../styles/Footer.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function Footer() {
  function ScrollTop(){
    window.scrollTo({top:0, behavior: 'smooth'})
  }
  return (
    <>
    <div className='FormasdePago'>
      <img src="https://newsport.vteximg.com.br/arquivos/mercado-pago-logo-footer.png?v=637795987868600000" alt="MercadoPago"/>
      <img src="https://newsport.vteximg.com.br/arquivos/logo-visa.svg?v=637432950045100000" alt="Visa"/>
      <img src="https://newsport.vteximg.com.br/arquivos/logo-mastercard.svg?v=637432950049300000" alt="Mastercard"/>
      <img src="https://newsport.vteximg.com.br/arquivos/logo-naranja.svg?v=637432950058570000" alt="Tarjeta Naranja"/>
      <img src="https://newsport.vteximg.com.br/arquivos/logo-pago-facil.svg?v=637432950063570000" alt="PagoFácil"/>
      <img src="https://newsport.vteximg.com.br/arquivos/logo-rapipago.svg?v=637432950058570000" alt="RapiPago"/>
      
    </div>
    <footer className='Footer'>
      <div className='Footer-Nav'>
      <LinkRouter to='/' className='Footer-link'> Inicio </LinkRouter>
      <LinkRouter to='/contacto' className='Footer-link'> Contacto </LinkRouter>
      <LinkRouter to='/comunidad' className='Footer-link'> Comunidad </LinkRouter>
      </div>
      <button onClick={ScrollTop} className='ScrollToTop'>
        <div className="text">
            <span>S</span>
            <span>u b</span>
            <span>i r</span>
        </div>
        <div className="clone">
            <span>S</span>
            <span>u b</span>
            <span>i r</span>
        </div>
        <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
    </footer>
    </>
    
  )
}

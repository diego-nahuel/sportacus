import React from 'react';
import '../styles/Footer.css'
import { Link as LinkRouter } from 'react-router-dom'
import pages from './Links/Pages'

const navLinks = (page) => <LinkRouter className='Footer-link' to={page.to} key={page.name}>{page.name}</LinkRouter>
const payVenues = [
  { name: 'MercadoPago', img: 'https://newsport.vteximg.com.br/arquivos/mercado-pago-logo-footer.png?v=637795987868600000' },
  { name: 'Visa', img: 'https://newsport.vteximg.com.br/arquivos/logo-visa.svg?v=637432950045100000' },
  { name: 'Mastercard', img: 'https://newsport.vteximg.com.br/arquivos/logo-mastercard.svg?v=637432950049300000' },
  { name: 'Tarjeta Naranja', img: 'https://newsport.vteximg.com.br/arquivos/logo-naranja.svg?v=637432950058570000' },
  { name: 'PagoFácil', img: 'https://newsport.vteximg.com.br/arquivos/logo-pago-facil.svg?v=637432950063570000' },
  { name: 'RapiPago', img: 'https://newsport.vteximg.com.br/arquivos/logo-rapipago.svg?v=637432950058570000' },
]
const payList = (option, index) => <img src={option.img} alt={option.name} key={index}/>

export default function Footer() {
  function ScrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      <footer className='Footer w100 col'>
        {/*  */}
        <div className='FormasDePago card-container gap-15'>
          {payVenues.map(payList)}
        </div>
        {/*  */}
        <div className='Footer-SubContainer w100 xpad-15 ypad-10'>
          <div className='Footer-Nav card-container ypad-15'>
            {pages.map(navLinks)}
          </div>
          <button onClick={ScrollTop} className='ScrollToTop align-end-m'>
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
        </div>

      </footer>
    </>
  )
}

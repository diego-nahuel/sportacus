import React from 'react'
import Carrusel from '../components/Carrusel'
import '../styles/Inicio.css'

const sports = [
  { name: 'Sport1', photo:'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 1' },
  { name: 'Sport2', photo:'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 2' },
  { name: 'Sport3', photo:'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 3' },
]
const sportList = (sport) => <div className='Card'>
  <h4>{sport.name}</h4>
  <img className='IMG-Card' src={sport.photo} />
  <p>{sport.description}</p>
</div>

const products = [
  { name: 'Sport1', photo:'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 1' },
  { name: 'Sport2', photo:'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 2' },
  { name: 'Sport3', photo:'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 3' },
]
const productList = (product) => <div className='Card'>
  <h4>{product.name}</h4>
  <img className='IMG-Card' src={product.photo} />
  <p>{product.description}</p>
</div>

export default function Home() {
  return (
    <>
      <div className='main-height main-bg align-center col text-light'>
        <Carrusel />

        <h2>Slogan</h2>

        {/* ------------------------------------Cards------------------------------------ */}
        <div className='Contenido col gap-15'>
          <div>
            <h3>Destacados</h3>
            <div className='Cards-Contenedor row gap-30'>
              {sports.map(sportList)}
            </div>
          </div>

          <div>
            <h3>Deportes</h3>
            <div className='Cards-Contenedor row gap-30'>
            {products.map(productList)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

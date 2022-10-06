import React from 'react'
import Carrusel from '../components/Carrusel'
import '../styles/Inicio.css'

const sports = [
  { name: 'Sport1', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 1' },
  { name: 'Sport2', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 2' },
  { name: 'Sport3', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 3' },
]
const sportList = (sport, index) => <div className='Card' key={index}>
  <h4 className='text-center'>{sport.name}</h4>
  <img className='IMG-Card' src={sport.photo} />
  <p>{sport.description}</p>
</div>

const products = [
  { name: 'Sport1', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 1' },
  { name: 'Sport2', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 2' },
  { name: 'Sport3', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 3' },
]
const productList = (product, index) => <div className='Card' key={index}>
  <h4 className='text-center'>{product.name}</h4>
  <img className='IMG-Card' src={product.photo} />
  <p>{product.description}</p>
</div>

export default function Home() {
  return (
    <>
      <main className='main-height main-bg align-center col text-light'>

        <div className='Slogan'>
          <h1 className='Slogan01'> Todas las canchas <span className='Slogan02'> en un solo lugar</span></h1>
        </div>

        <Carrusel />

        {/* ------------------------------------Cards------------------------------------ */}
        <div className='container-width pad-10 bg blur'>
          <div className='col gap-15'>
            <div>
              <h3>Destacados</h3>
              <div className='justify-center row gap-30'>
                {sports.map(sportList)}
              </div>
              <div>
                <h3>Deportes</h3>
                <div className='justify-center row gap-30'>
                  {products.map(productList)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

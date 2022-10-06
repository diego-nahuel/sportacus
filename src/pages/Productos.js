import React from 'react'
import {useGetAllQuery} from '../features/productsApi'

const products = [
  { name: 'Sport1', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 1' },
  { name: 'Sport2', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 2' },
  { name: 'Sport3', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 3' },
  { name: 'Sport4', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 4' },
]

const productList = (product) =>
  <div className='Card'>
    <h4>{product.name}</h4>
    <img className='IMG-Card' src={product.image} />
    <p>{product.description}</p>
  </div>

const sports = [
  { name: 'Sport1', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 1' },
  { name: 'Sport2', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 2' },
  { name: 'Sport3', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 3' },
  { name: 'Sport4', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 4' },
]

const sportCheck = (sport) =>
  <button className='br3 form-padding button-check'>
    <label className='align-center check-indent'>
      <input type="checkbox" className=''></input>
      {sport.name}
    </label>
  </button>

const sportSelect = (sport) =>
  <option>{sport.name}</option>

export default function Productos() {
  const allProduct = useGetAllQuery('').data.response

  console.log(allProduct)
  return (
    <>
      <main className='main-bg main-height text-light justify-center'>
        <div className='container-width bg blur col gap-15 pad-10'>
          <h3>Productos</h3>
          <div className='bg br3 row space-between w100'>
            <div className='justify-start gap-15'>
            {sports.map(sportCheck)}
            </div>
            <select className='w25 br3 form-padding'>
              <option></option>
              {sports.map(sportSelect)}
            </select>
          </div>
          <div className='card-container justify-center gap-30'>
            {allProduct.map(productList)}
          </div>
        </div>
      </main>
    </>
  )
}

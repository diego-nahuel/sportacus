import axios from 'axios'
import {React, useEffect, useRef, useState} from 'react'
import apiUrl from '../API'

const fields = [
  { name: 'Sport1', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 1', sport:'1' },
  { name: 'Sport2', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 2', sport:'2' },
  { name: 'Sport3', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 3', sport:'3' },
  { name: 'Sport4', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Sport 4', sport:'4' },
]

const fieldList = (field) =>
  <div className='Card'>
    <h4>{field.name}</h4>
    <img className='IMG-Card' src={field.photo} />
    <p>{field.description}</p>
    <p>{field.sport}</p>
  </div>

const sportCheck = (field) =>
  <button className='br3 form-padding button-check'>
    <label className='align-center check-indent'>
      <input type="checkbox" className=''></input>
      {field.sport}
    </label>
  </button>

const sportSelect = (field) =>
  <option>{field.sport}</option>

export default function Canchas() {

  const fieldCard = (field)=>
  <div>
    <h2>{field.name}</h2>
    <img alt={field.name} src={field.image}/>
    <p>{field.city}</p>
  </div>

const [canchas, setCanchas]=useState([])
const [search, setSearch] =useState('')
const searchInput = useRef('')
const accion =() => {
  setSearch(searchInput.current.value)
}
useEffect(()=>{
  axios.get(apiUrl+'/fields?name='+search)
      .then(response => setCanchas(response.data.response))
  }, [])

  
  return (
    <>
      <main className='main-bg main-height text-light justify-center'>
        <div className='container-width bg blur col gap-15 pad-10'>
          <h3>Productos</h3>
          <div className='bg br3 row space-between w100'>
            <div className='justify-start gap-15'>
            {fields.map(sportCheck)}
            </div>
            <select className='w25 br3 form-padding'>
              <option></option>
              {fields.map(sportSelect)}
            </select>
          </div>
          <div className='card-container justify-center gap-30'>
          {canchas.map(fieldCard)}
          </div>
        </div>
      </main>
    </>
  )
}

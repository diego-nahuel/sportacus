import axios from 'axios'
import {React, useEffect, useRef, useState} from 'react'
import apiUrl from '../API'
import { useAllFieldsQuery } from '../features/fieldsAPI'

export default function Alquileres() {
  const fieldCard = (field)=>
  <div>
    <h2>{field.name}</h2>
    <img alt={field.name} src={field.image}/>
    <p>{field.city}</p>
  </div>
//  let {data:canchas, isLoading, isSuccess}=useAllFieldsQuery('')
//  if (isLoading) {
//   canchas=[]
//  } else if (isSuccess) {
//   canchas= canchas
//  }
//  console.log(canchas)
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
  console.log(canchas)
  return (
    <div>
      <h1>Alquileres</h1>
      <input type='search' ref={searchInput} onChange={accion}/>
      <div className='canchas-container'>
      {canchas.map(fieldCard)}
      </div>
    </div>
  )
}

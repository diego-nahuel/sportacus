import '../styles/Components.css'
import { React, useEffect, useRef, useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import sports from '../actions/SportList'

export default function Canchas() {
  const fieldList = (field) =>
    <div className='Card bg-light br3'>
      <h4 className='xpad-10 pad-5 w-normal font-l text-center'>{field.name}</h4>
      <img className='IMG-Card bg-dark' src={field.photo} />
      <div className='xpad-10'>
        <p>Deporte: {field.sport}</p>
      <div className='xdivider-dark transparent-25 ymar-10'></div>
      <p>Ciudad: {field.city}</p>
      <div className='xdivider-dark transparent-25 ymar-10'></div>
      </div>
      

      <div className='space-between w100'>
        <p className='xpad-10 align-center'>Precio: ${field.price}</p>
        <LinkRouter to={field.to} key={field.name} className='Card-Button submit-button br-none w50 text-dark form-padding text-center font-14'>
          Ver mas...
        </LinkRouter>
      </div>
    </div>

  return (
    <>
      <main className='main-bg main-height text-dark justify-center'>
        <div className='container-width bg blur col gap-5 pad-15'>
          <div className='col-row-768 space-between'>
            <h2 className='text-light'>Canchas</h2>
          </div>
          <div className='xdivider-light transparent-50 ymar-10'></div>

          <div className='card-container justify-center gap-30'>
            {sports.map(fieldList)}
          </div>
        </div>
      </main>
    </>
  )
}

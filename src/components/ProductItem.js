import React from 'react'
import '../styles/Components.css'

const ProductItem = ({data,addToCart}) => {
    let {_id, name, price, image, description, sport, stock} = data
  return (
    <div className='Card bg-dark br3'>
        <h4 className='xpad-10 pad-5 w-normal font-l text-center'>{name}</h4>
        <img className='IMG-Card' src={image} />
        <p className='xpad-10 h75 overflow-hidden font-n w-normal'>{description}</p>
        <div className='xdivider-light transparent-25 ymar-10'></div>
        <ul className='list-style-none xpad-10 h25 row space-between'>
          <li>Deporte: {sport}</li>
          <li>Stock: {stock}</li>
        </ul>
        <div className='xdivider-light transparent-25 ymar-10'></div>
        <div className='space-between w100'>
          <p className='xpad-10 align-center'>Precio: ${price}</p>
          <button className='Card-Button submit-button br-none w50 text-dark form-padding font-14' onClick={() => addToCart(_id)}>Agregar a carrito</button>
        </div>
    </div>
  )
}

export default ProductItem
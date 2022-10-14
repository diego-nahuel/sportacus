import React from 'react'

const CartItem = ({data,delFromCart}) => {
    let {_id, name, price, quantity, image} = data
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
  return (
    <div style={{borderBottom:'thin solid gray'}}>
      <div className="card-client">
        <div className="user-picture">
          <img src={image}/>
        </div>
    <p className="name-client"> {name}
        <span>${formatNumber(price)} x {quantity} = ${formatNumber(price * quantity)} 
        </span>
    </p>
    <div className="social-media">
      {/* <svg className='icon-cartItem' onClick={() => delFromCart(_id)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
      </svg>
      <span className="tooltip-social">Eliminar</span> */}
      <button className='icon-cartItem' onClick={() => delFromCart(_id)} >Eliminar Uno</button>
    
      {/* <svg className='icon-cartItem' onClick={() => delFromCart(_id,true)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
            <span className="tooltip-social">Eliminar Todo</span> */}
      <button className='icon-cartItem' onClick={() => delFromCart(_id)} >Eliminar Todos</button>
    </div>
    </div>
    </div>
  )
}

export default CartItem
import React from 'react'

const CartItem = ({data,delFromCart}) => {
    let {_id, name, price, quantity} = data

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
  return (
    <div style={{borderBottom:'thin solid gray'}}>
        <h4>{name}</h4>
        <h5>${formatNumber(price)} x {quantity} = ${formatNumber(price * quantity)} </h5>
        <button onClick={() => delFromCart(_id)}>Eliminar Uno</button>
        <br/>
        <button onClick={() => delFromCart(_id,true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem
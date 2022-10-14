import React from 'react'
import styles from '../components/Styles'

const CartItem = ({ data, delFromCart }) => {
  let { _id, name, price, quantity, image } = data
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
  return (
    <div className="Card br3 bg-light text-dark shadow-y col gap-5">
      <h3 className="text-center w-normal"> {name}</h3>
      <img className="IMG-Card" src={image} />
      <div className='xpad-10 ypad-5 col gap-5'>
        <span>Precio Unidad: ${formatNumber(price)}
        </span>
        <div className={styles.dividerDark}></div>
        <span>Cantidad: {quantity}
        </span>
        <div className={styles.dividerDark}></div>
        <span>Total: ${formatNumber(price * quantity)}
        </span>
      </div>

        <button className='button-1 transition form-padding w100 font-14' onClick={() => delFromCart(_id)} >Eliminar Uno</button>
        <button className='br3-b button-2 transition form-padding w100 font-14' onClick={() => delFromCart(_id)} >Eliminar Todos</button>
    </div>
  )
}

export default CartItem
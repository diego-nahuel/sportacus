import React from 'react'
import { CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from '../reducers/ShoppingReducer'
import '../styles/Cart.css'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../components/Styles'
import Alert from './Alert';


const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.shoppingReducer.cart)

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch(REMOVE_ALL_FROM_CART(id))
    } else {
      dispatch(REMOVE_ONE_FROM_CART(id))
    }
  }

  const clearCart = () => {
    dispatch(CLEAR_CART())
  }
  const finishBuy = () => {
    dispatch(CLEAR_CART())
    Alert("success", "Compra realizada con éxito!")
  }
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
  let addition = 0
  cart.forEach(product => {
    addition = (product.price * product.quantity) + addition
  })
  const total = formatNumber(addition)
  return (
    <div className='xpad-10 main-height bg container-width ypad-10 col gap-5'>
      <h2 className={styles.h2Cart}>Carrito de compras</h2>
      <div className={styles.dividerLight}></div>
      {cart.length > 0 ?
        <>
          <article className='br3 pad-15 col-row-768 gap-15'>
            <div className='col-row-768 w100-75 space-evenly wrap gap-30'>
              {cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)}
            </div>

            <div className={styles.dividerLight}></div>

            <div className='w100-25 col gap-10'>
              <h4 className='text-right text-light font-xl'>Total: ${total}</h4>
              <div className='space-between col-row-768 gap-15 w100'>
                <button className={styles.cartButton} onClick={clearCart}>Limpiar Carrito</button>
                <button className={styles.cartButton} onClick={finishBuy}>Comprar</button>
              </div>
              <div className='display-none-t xdivider-light ydivider-light transparent-50 w100'></div>
            </div>
          </article>
        </>
        :
        <>
          <h3 className='ypad-30 text-center text-light'>No hay productos en el Carrito</h3>
        </>
      }
    </div>
  )
}

export default ShoppingCart
import React from 'react'
import { CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from '../reducers/ShoppingReducer'
import '../styles/Cart.css'
// import '../styles/Components.css'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Cart.css'


const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.shoppingReducer.cart)

  const delFromCart = (id,all=false) => {
      if(all){
        dispatch(REMOVE_ALL_FROM_CART(id))
      } else {
        dispatch(REMOVE_ONE_FROM_CART(id))
      }
  }

  const clearCart = () => {
      dispatch(CLEAR_CART())
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
    <div className='cart-ontainer'>
    <h2 className='cart-title'>Carrito de compras</h2>
    {cart.length > 0?
    <>
      <h3>Productos</h3>
      <article className='box-cart'>
        <div className='cart-card'>
        {cart.map((item,index) => <CartItem key={index} data={item} delFromCart={delFromCart}/>)}
        </div>
        <div className='total-container'>
        <h4 className='total'>Total: ${total}</h4>
        <div className='buttons'><button className='btn-clear' onClick={clearCart}>Limpiar Carrito</button>
        <button className='btn-buy'>Comprar</button></div>
        </div>
      </article>
    </>
    :
    <>
    <h3>No hay productos en el Carrito</h3>
    </>
    }
    
    </div>
  )
}

export default ShoppingCart
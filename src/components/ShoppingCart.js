import React, { useReducer } from 'react'
import { CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, shoppingInitialState, shoppingReducer } from '../reducers/ShoppingReducer'
import ProductItem from './ProductItem'
import '../styles/Components.css'
import CartItem from './CartItem'
import { TYPES } from '../actions/ShoppingAction'
import { useDispatch, useSelector } from 'react-redux'


const ShoppingCart = () => {
  const dispatch = useDispatch();
    const cart = useSelector(state => state.shoppingReducer.cart)
  console.log(cart);

    if(cart){
      console.log(cart)
    }


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

  return (
    <>
    <h2>Carrito de compras</h2>
    <h3>Productos</h3>
    {/* <article className='card-container justify-center gap-30'>
        {products.map((product) => <ProductItem key={product._id} data={product} addToCart={addToCart} />)}
    </article>
    <h3>Carrito</h3> */}
    <article className='box'>
      <button onClick={clearCart}>Limpiar Carrito</button>
      {
        cart.map((item,index) => <CartItem key={index} data={item} delFromCart={delFromCart}/>)
      }
    </article>
    </>
  )
}

export default ShoppingCart
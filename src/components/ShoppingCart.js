import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/ShoppingReducer'
import ProductItem from './ProductItem'
import '../styles/Components.css'
import CartItem from './CartItem'
import { TYPES } from '../actions/ShoppingAction'


const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const {products, cart} = state

    const addToCart = (id) => {
      //console.log(id);
      dispatch({
        type: TYPES.ADD_TO_CART,
        payload: id
      })
    }

    const delFromCart = (id,all=false) => {
      if(all){
        dispatch({
          type:TYPES.REMOVE_ALL_FROM_CART,
          payload:id
        })
      } else {
        dispatch({
          type:TYPES.REMOVE_ONE_FROM_CART,
          payload:id
        })
      }
    }

    const clearCart = () => {
      dispatch({type: TYPES.CLEAR_CART})
    }

  return (
    <>
    <h2>Carrito de compras</h2>
    <h3>Productos</h3>
    <article className='card-container justify-center gap-30'>
        {products.map((product) => <ProductItem key={product._id} data={product} addToCart={addToCart} />)}
    </article>
    <h3>Carrito</h3>
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
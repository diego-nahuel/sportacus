import { createSlice } from "@reduxjs/toolkit";
import { ProductDB } from "../features/ProductsDB";

export const shoppingInitialState = {
    products: ProductDB,
    cart: []
}

export const shoppingReducer = createSlice({
    name: 'shopping',
    initialState: shoppingInitialState,
    reducers: {
        ADD_TO_CART: (state,action) => {
            let newItem = state.products.find(product => product._id === action.payload)
            console.log(action.payload);
            let itemInCart = state.cart.find(item => item._id === newItem._id)
           state.cart = itemInCart? 
                state.cart.map(item => item._id === newItem._id? {...item,quantity:item.quantity +1}:item)
            :
            [...state.cart, {...newItem,quantity:1}]
        },
        REMOVE_ONE_FROM_CART: (state,action) => {
            let itemToDelete = state.cart.find(item => item._id === action.payload)
            if(itemToDelete){
           state.cart = itemToDelete.quantity > 1 ?
                 state.cart.map(item => item._id === action.payload? {...item, quantity: item.quantity -1}
                    : item)
            :
                 state.cart.filter(item => item._id !== action.payload)
            }
        },
        REMOVE_ALL_FROM_CART: (state,action) =>{
           state.cart = 
                state.cart.filter(item => item._id !== action.payload)
        },
        CLEAR_CART: (state,action) => {
           state.cart = []
        }
    }
})
export const {ADD_TO_CART,REMOVE_ONE_FROM_CART,REMOVE_ALL_FROM_CART,CLEAR_CART} = shoppingReducer.actions

export default shoppingReducer.reducer
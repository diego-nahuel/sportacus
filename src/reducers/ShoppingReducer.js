import { TYPES } from "../actions/ShoppingAction";
import { ProductDB } from "../features/ProductsDB";


export const shoppingInitialState = {
    products: ProductDB,
    cart: []
}

export function shoppingReducer(state,action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product._id === action.payload)

            let itemInCart = state.cart.find(item => item._id === newItem._id)
            return itemInCart? {
                ...state, cart:state.cart.map(item => item._id === newItem._id? {...item,quantity:item.quantity +1}:item)
            } 
            :
            { ...state, cart:[...state.cart, {...newItem,quantity:1}]}
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item._id === action.payload)

            return itemToDelete.quantity > 1 ?{
                ...state, cart: state.cart.map(item => item._id === action.payload? {...item, quantity: item.quantity -1}
                    : item)
            }:{
                ...state, cart: state.cart.filter(item => item._id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {
                ...state, cart: state.cart.filter(item => item._id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART:
            return shoppingInitialState
        default:
            return state;
    }
}
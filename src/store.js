import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { authAPI } from "./features/authAPI";
import { productsApi} from "./features/productsApi";
import {fieldsApi} from "./features/fieldsApi";
import { commentsAPI } from "./features/commentAPI";
import  shoppingReducer  from "./reducers/ShoppingReducer";

export default configureStore ({
    reducer: {
        user: userReducer,
        [authAPI.reducerPath] : authAPI.reducer,

        products: productsApi,
        [productsApi.reducerPath]: productsApi.reducer,

        fields: fieldsApi,
        [fieldsApi.reducerPath]:fieldsApi.reducer,

        comments: commentsAPI,
        [commentsAPI.reducerPath]:commentsAPI.reducer,

        shoppingReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
        productsApi: true,
        fieldsApi:true
    })
    .concat(authAPI.middleware)
    .concat(productsApi.middleware)
    .concat(fieldsApi.middleware)
    .concat(commentsAPI.middleware)
})
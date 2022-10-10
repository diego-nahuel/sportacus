import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { authAPI } from "./features/authAPI";
import { productsApi} from "./features/productsApi";
import {fieldsApi} from "./features/fieldsApi";

export default configureStore ({
    reducer: {
        user: userReducer,
        [authAPI.reducerPath] : authAPI.reducer,

        products: productsApi,
        [productsApi.reducerPath]: productsApi.reducer,

        fields: fieldsApi,
        [fieldsApi.reducer]:fieldsApi.reducer
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
})
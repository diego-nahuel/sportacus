import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { authAPI } from "./features/authAPI";
import { productsApi} from "./features/productsApi";
import {fieldsAPI} from "./features/fieldsAPI";

export default configureStore ({
    reducer: {
        user: userReducer,
        [authAPI.reducerPath] : authAPI.reducer,

        products: productsApi,
        [productsApi.reducerPath]: productsApi.reducer,

        fields: fieldsAPI,
        [fieldsAPI.reducer]:fieldsAPI.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authAPI.middleware)
    .concat(productsApi.middleware)
})
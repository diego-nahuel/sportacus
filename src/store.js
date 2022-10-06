import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { authAPI } from "./features/authAPI";
import { productsApi } from "./features/productsAPI";


export default configureStore ({
    reducer: {
        user: userReducer,
        [authAPI.reducerPath] : authAPI.reducer,

        products: productsApi,
        [productsApi.reducerPath]: productsApi.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authAPI.middleware)
})
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { authAPI } from "./features/authAPi";

export default configureStore ({
    reducer: {
        user: userReducer,
        [authAPI.reducerPath] : authAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authAPI.middleware)
})
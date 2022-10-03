import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { authAPI } from "./features/authAPI";

export default configureStore ({
    reducer: {
        user: userReducer,
        [authAPI.reducerPath] : authAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authAPI.middleware)
})
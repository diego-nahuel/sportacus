import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiUrl from "../API";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),
    endpoints: (builder) => ({
        singUp: builder.mutation({
            query: (user) => ({
                url: `/users/signup`,
                method: 'POST',
                body: user
            })
        }),
        signIn: builder.mutation({
            query: (user) => ({
                url: `/users/signin`,
                method: 'POST',
                body: user
            })
        }),
        signOut: builder.mutation({
            query: (user) => ({
                url: `/users/signout`,
                method: 'POST',
                body: user
            })
        }),
        verifyToken: builder.query({
            query: (token) => ({
                url: `/users/token`,
                method: 'GET',
                headers: {Authorization: `Bearer ${token}`}
            })
        })
    })
})

export const {useSingUpMutation, useSignInMutation, useSignOutMutation, useLazyVerifyTokenQuery} = authAPI
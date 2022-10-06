import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiUrl from "../API";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),
    endpoints: (builder) => ({
        registro: builder.mutation({
            query: (user) => ({
                url: `/usuarios/signup`,
                method: 'POST',
                body: user
            })
        }),
        inicioSesion: builder.mutation({
            query: (user) => ({
                url: `/usuarios/signin`,
                method: 'POST',
                body: user
            })
        }),
        cerrarSesion: builder.mutation({
            query: (user) => ({
                url: `/usuarios/signout`,
                method: 'POST',
                body: user
            })
        }),
        verifyToken: builder.query({
            query: (token) => ({
                url: `/usuarios/token`,
                method: 'GET',
                headers: {Authorization: `Bearer ${token}`}
            })
        })
    })
})

export const {useRegistroMutation, useInicioSesionMutation, useCerrarSesionMutation, useLazyVerifyTokenQuery} = authAPI
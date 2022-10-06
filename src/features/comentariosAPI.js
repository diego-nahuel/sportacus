import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiUrl from "../API";

const comentariosAPI =  createApi({
    reducerPath: 'comentariosAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),
    endpoints: (builder) => ({
        crearComentario: builder.mutation({
            query:(newComment) => ({
                url:`/comentario`,
                method: 'POST',
                body: newComment,
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        comentarios: builder.query({
            query: (id) => `/comentario?cancha=${id}`
        }),
        esditarComentario: builder.mutation({
            query: ({comment, id}) => ({
                url: `/comentario/${id}`,
                method: 'PATCH',
                body: {comment: comment},
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        borrarComentario: builder.mutation({
            query: (id) => ({
                url: `/comentario/${id}`,
                method: 'DELETE',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
    })
});

export const {} = comentariosAPI
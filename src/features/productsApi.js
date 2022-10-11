import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiUrl from "../API";

export const productsApi = createApi({
    reducerPath: 'productsApi',

    baseQuery: fetchBaseQuery({
        baseUrl:apiUrl
    }),
    endpoints:(builder) => ({
        create: builder.mutation({
            query:(data)=>({
                url:'/products',
                method:'POST',
                body:data,
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        getAll: builder.query({
            query:(search)=>`/products/?name=${search}`
        }),
        getOne: builder.query({
            query:(id)=>`/products/${id}`
        }),
        edit: builder.mutation({
            query:(data)=>({
                url:'/products',
                method:'PATCH',
                body:data,
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        delete: builder.mutation({
            query:(id)=>({
                url:`/products/${id}`,
                method:'DELETE',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        })
    })
})

export const {useGetAllQuery,
            useCreateMutation,
            useDeleteMutation,
            useEditMutation,
            useGetOneQuery} = productsApi
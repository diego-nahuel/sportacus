import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import apiUrl from "../API";

export const fieldsApi =  createApi({
    reducerPath: 'fieldsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),
    endpoints: (builder) => ({
        allFields: builder.query({
            query: (inputFields) => `/fields?name=${inputFields}`
        }),
        allFieldsUser: builder.query({
            query: (id) => `/fields?user=${id}`
        }),
        oneFields: builder.query({
            query: (id) => `/fields/${id}`
        }),
        newFields: builder.mutation({
            query:(newFields) => ({
                url:`/fields`,
                method: 'POST',
                body: newFields
            })
        }),
        updateFields: builder.mutation({
            query:(fields) => ({
                url: `/fields/${fields.id}`,
                method: 'PATCH',
                body: fields.editFields
            })
        }),
        deleteFields: builder.mutation({
            query:(id) => ({
                url: `/fields/${id}`,
                method: 'DELETE',
            })
        }),
        likeDislike: builder.mutation({
            query:(id) => ({
                url: `/fields/like/${id}`,
                method: 'PATCH',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
    })
});
export const {useOneFieldsQuery, useAllFieldsQuery, useAllFieldsUserQuery, useNewFieldsMutation, useUpdateFieldsMutation, useDeleteFieldsMutation, useLikeDislikeMutation} = fieldsApi;
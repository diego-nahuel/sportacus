import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiUrl from "../API";

const commentsAPI =  createApi({
    reducerPath: 'commentsAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl
    }),
    endpoints: (builder) => ({
        createComment: builder.mutation({
            query:(newComment) => ({
                url:`/comments`,
                method: 'POST',
                body: newComment,
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        allComments: builder.query({
            query: (id) => `/comments?fields=${id}`
        }),
        editComment: builder.mutation({
            query: ({comment, id}) => ({
                url: `/comments/${id}`,
                method: 'PATCH',
                body: {comment: comment},
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
    })
});

export const {useAllCommentsQuery, useEditCommentMutation, useDeleteCommentMutation, useCreateCommentMutation} = commentsAPI
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "../../comment/types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => "comments",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Comments" as const, id })),
              { type: "Comments", id: "LIST" },
            ]
          : [{ type: "Comments", id: "LIST" }],
    }),
    getCommentById: builder.query<Comment, number>({
      query: (id) => `comments/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Comments", id }],
    }),
    getCommentsByPostId: builder.query<Comment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (result, _error, postId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Comments" as const, id })),
              { type: "Comments", id: `POST-${postId}` },
            ]
          : [{ type: "Comments", id: `POST-${postId}` }],
    }),
    addComment: builder.mutation<Comment, Partial<Comment>>({
      query: (body) => ({
        url: "comments",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentByIdQuery,
  useGetCommentsByPostIdQuery,
  useAddCommentMutation,
} = commentsApi;

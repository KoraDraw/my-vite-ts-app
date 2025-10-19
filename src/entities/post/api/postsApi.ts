import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../model/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Posts", id }],
    }),
    getPostsByUserId: builder.query<Post[], number>({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: `USER-${userId}` },
            ]
          : [{ type: "Posts", id: `USER-${userId}` }],
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
  useAddPostMutation,
} = postsApi;

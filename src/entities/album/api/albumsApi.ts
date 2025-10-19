import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Album } from "../types"; // Определите тип Album

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => "albums",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Albums" as const, id })),
              { type: "Albums", id: "LIST" },
            ]
          : [{ type: "Albums", id: "LIST" }],
    }),
    getAlbumById: builder.query<Album, number>({
      query: (id) => `albums/${id}`,
      providesTags: (result, error, id) => [{ type: "Albums", id }],
    }),
    getAlbumsByUserId: builder.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Albums" as const, id })),
              { type: "Albums", id: `USER-${userId}` },
            ]
          : [{ type: "Albums", id: `USER-${userId}` }],
    }),
    addAlbum: builder.mutation<Album, Partial<Album>>({
      query: (body) => ({
        url: "albums",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Albums", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumByIdQuery,
  useGetAlbumsByUserIdQuery,
  useAddAlbumMutation,
} = albumsApi;

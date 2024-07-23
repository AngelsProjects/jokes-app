import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getJokes: builder.query({
      query: () => 'jokes',
    }),
    getRandomJokes: builder.query({
      query: (number) => `jokes/random/${number}`,
    }),
    addJoke: builder.mutation({
      query: (newJoke) => ({
        url: 'jokes',
        method: 'POST',
        body: newJoke,
      }),
    }),
    editJoke: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `jokes/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteJoke: builder.mutation({
      query: (id) => ({
        url: `jokes/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetJokesQuery,
  useGetRandomJokesQuery,
  useAddJokeMutation,
  useEditJokeMutation,
  useDeleteJokeMutation,
} = apiSlice

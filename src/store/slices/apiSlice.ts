import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Joke } from '@/types/joke'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getJokes: builder.query<Joke[], void>({
      query: () => 'jokes'
    }),
    getRandomJoke: builder.query<Joke, void>({
      query: () => 'jokes/random'
    }),
    getRandomJokes: builder.query<Joke[], number>({
      query: number => `jokes/random/${number}`
    }),
    addJoke: builder.mutation({
      query: newJoke => ({
        url: 'jokes',
        method: 'POST',
        body: newJoke
      })
    }),
    editJoke: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `jokes/${id}`,
        method: 'PATCH',
        body: patch
      })
    }),
    deleteJoke: builder.mutation({
      query: id => ({
        url: `jokes/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useGetJokesQuery,
  useGetRandomJokeQuery,
  useLazyGetRandomJokeQuery,
  useGetRandomJokesQuery,
  useAddJokeMutation,
  useEditJokeMutation,
  useDeleteJokeMutation
} = apiSlice

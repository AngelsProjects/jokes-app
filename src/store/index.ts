import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import jokesSliceReducer from './slices/jokesSlice'

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    jokes:jokesSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

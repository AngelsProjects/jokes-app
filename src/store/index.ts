import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'
import { apiSlice } from './slices/apiSlice'

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
  })
}

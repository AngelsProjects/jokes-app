import { combineReducers } from 'redux'

import { apiSlice } from './slices/apiSlice'
import jokesReducer from './slices/jokesSlice'
import snackbarReducer from './slices/snackbarSlice'

const rootReducer = combineReducers({
  api: apiSlice.reducer,
  jokes: jokesReducer,
  snackbar: snackbarReducer
})

export default rootReducer

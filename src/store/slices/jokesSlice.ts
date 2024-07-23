import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}

interface JokesState {
  jokes: Joke[]
}

const initialState: JokesState = {
  jokes: []
}

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    setJokes(state, action: PayloadAction<Joke[]>) {
      state.jokes = action.payload
    },
    addJoke(state, action: PayloadAction<Joke>) {
      state.jokes.push(action.payload)
    },
    removeJoke(state, action: PayloadAction<number>) {
      state.jokes = state.jokes.filter(joke => joke.id !== action.payload)
    },
    updateJoke(state, action: PayloadAction<Joke>) {
      const index = state.jokes.findIndex(joke => joke.id === action.payload.id)

      if (index !== -1) {
        state.jokes[index] = action.payload
      }
    }
  }
})

export const { setJokes, addJoke, removeJoke, updateJoke } = jokesSlice.actions
export default jokesSlice.reducer

export type JokeFormProps = {
  jokeId?: string
}

export type JokeFormData = {
  type: string
  setup: string
  punchline: string
}

export type Joke = {
  id: number
  type: string
  setup: string
  punchline: string
}

export type JokeListProps = {
  jokes: Joke[]
}

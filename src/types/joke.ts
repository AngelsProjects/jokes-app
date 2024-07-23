export type JokeFormProps = {
  jokeId?: string
}

export type JokeFormData = {
  type: string
  setup: string
  punchline: string
}

type Joke = {
  id: number
  setup: string
  punchline: string
}

export type JokeListProps = {
  jokes: Joke[]
}

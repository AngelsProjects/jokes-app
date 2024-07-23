import { useEffect, useState } from 'react'
import axios from 'axios'

export default function RandomJokePage() {
  const [joke, setJoke] = useState(null)

  useEffect(() => {
    axios.get('/api/jokes/random').then((response) => {
      setJoke(response.data)
    })
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Random Joke</h1>
      {joke && (
        <div>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  )
}

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function RandomJokesPage({ params }: { params: { number: string } }) {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get(`/api/jokes/random/${params.number}`).then((response) => {
      setJokes(response.data)
    })
  }, [params.number])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Random Jokes</h1>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

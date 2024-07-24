import Card from '@mui/material/Card'

import JokeForm from '@/components/joke/JokeForm'

export default function AddJokePage() {
  return (
    <Card className='container mx-auto mt-4 max-w-96 p-4'>
      <h1 className='text-2xl font-bold'>Add a New Joke</h1>
      <JokeForm />
    </Card>
  )
}

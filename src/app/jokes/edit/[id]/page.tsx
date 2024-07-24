import Card from '@mui/material/Card'

import JokeForm from '@/components/joke/JokeForm'

export default function EditJokePage({ params }: { params: { id: string } }) {
  return (
    <Card className='container mx-auto mt-4 max-w-96 p-4'>
      <h1 className='text-2xl font-bold'>Edit Joke</h1>
      <JokeForm jokeId={params.id} />
    </Card>
  )
}

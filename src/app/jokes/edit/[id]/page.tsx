import JokeForm from '@/components/joke/JokeForm'

export default function EditJokePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Edit Joke</h1>
      <JokeForm jokeId={params.id} />
    </div>
  )
}

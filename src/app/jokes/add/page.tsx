import JokeForm from '@/components/jokes/JokeForm'

export default function AddJokePage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold'>Add a New Joke</h1>
      <JokeForm />
    </div>
  )
}

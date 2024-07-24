import Image from 'next/image'

export default function Home() {
  return (
    <div className='container mx-auto flex h-[90vh] flex-col items-center justify-evenly p-4'>
      <h1 className='text-2xl font-bold'>Welcome to the Jokes App</h1>
      <p>
        Enjoy a fun and lighthearted trivia experience by discovering new jokes. Click on one of the links at the top of
        the Navigation Bar to get started.
      </p>

      <Image
        src='/images/dancing.gif'
        alt='Dancing Jokes'
        className='h-64 w-full object-contain'
        width={64}
        height={64}
      />
    </div>
  )
}

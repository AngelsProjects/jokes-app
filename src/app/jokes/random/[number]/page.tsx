'use client'

import { Box, Container, Typography } from '@mui/material'
import { useSearchParams } from 'next/navigation'

import { useGetRandomJokesQuery } from '@/store/slices/apiSlice'
import { Joke } from '@/types/joke'

export default function RandomJokesPage() {
  const searchParams = useSearchParams()
  const number = searchParams.get('number') || '1'
  const { data: jokes, error, isLoading } = useGetRandomJokesQuery(Number(number))

  return (
    <Container maxWidth='md' className='p-4 sm:p-6 md:p-8'>
      <Typography variant='h4' component='h1' className='text-center sm:text-left' gutterBottom>
        Random Jokes
      </Typography>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading jokes</p>}
      {jokes && (
        <Box>
          {jokes.map((joke: Joke) => (
            <Box key={joke.id} mb={4}>
              <Typography variant='h6'>{joke.setup}</Typography>
              <Typography variant='body1'>{joke.punchline}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  )
}

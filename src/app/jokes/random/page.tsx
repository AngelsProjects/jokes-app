import { Box, Container, Typography } from '@mui/material'

import { useGetRandomJokeQuery } from '@/store/slices/apiSlice'

export default function RandomJokePage() {
  const { data: joke, error, isLoading } = useGetRandomJokeQuery()

  return (
    <Container maxWidth='md' className='p-4 sm:p-6 md:p-8'>
      <Typography variant='h4' component='h1' className='text-center sm:text-left' gutterBottom>
        Random Joke
      </Typography>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading joke</p>}
      {joke && (
        <Box>
          <Typography variant='h6'>{joke.setup}</Typography>
          <Typography variant='body1'>{joke.punchline}</Typography>
        </Box>
      )}
    </Container>
  )
}

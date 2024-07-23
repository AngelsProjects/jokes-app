import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import { useGetRandomJokesQuery } from '@/store/slices/apiSlice'

export default function RandomJokesPage() {
  const router = useRouter()
  const { number } = router.query
  const { data: jokes, error, isLoading } = useGetRandomJokesQuery(number)

  return (
    <Container maxWidth='md' className='p-4 sm:p-6 md:p-8'>
      <Typography variant='h4' component='h1' className='text-center sm:text-left' gutterBottom>
        Random Jokes
      </Typography>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading jokes</p>}
      {jokes && (
        <Box>
          {jokes.map(joke => (
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

'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

import JokeList from '@/components/joke/JokeList'
import LoadingAnim from '@/components/layout/LoadingAnim'
import { useGetJokesQuery } from '@/store/slices/apiSlice'

export default function JokesPage() {
  const { data: jokes, error, isLoading, refetch } = useGetJokesQuery(undefined)

  const reloadJokes = () => {
    refetch()
  }

  return (
    <Container maxWidth='md' className='p-4 sm:p-6 md:p-8'>
      <Typography variant='h4' component='h1' className='text-center sm:text-left' gutterBottom>
        All Jokes
      </Typography>
      {isLoading && <LoadingAnim />}
      {error && <p>Error loading jokes</p>}
      {jokes && <JokeList jokes={jokes} reloadJokes={reloadJokes} />}
      <Box mt={4}>
        <Link href='/jokes/add' passHref>
          <Button variant='contained' color='primary'>
            Add New Joke
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

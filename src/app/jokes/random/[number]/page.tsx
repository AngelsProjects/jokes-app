'use client'

import { Box, Container, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import LoadingAnim from '@/components/layout/LoadingAnim'
import { useGetRandomJokesQuery } from '@/store/slices/apiSlice'
import { Joke } from '@/types/joke'

export default function RandomJokesPage({ params: { number } }: { params: { number: string } }) {
  const { data: jokes, error, isLoading } = useGetRandomJokesQuery(Number(number))
  const [visiblePunchlines, setVisiblePunchlines] = useState<{ [key: number]: boolean }>({})

  const handleTogglePunchline = (id: number) => {
    setVisiblePunchlines(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <Container maxWidth='md' className='p-4 sm:p-6 md:p-8'>
      <Typography variant='h4' component='h1' className='text-center sm:text-left' gutterBottom>
        Random Jokes
      </Typography>
      {isLoading && <LoadingAnim />}
      {error && <p>Error loading jokes</p>}
      {jokes && (
        <Box>
          {jokes.map((joke: Joke) => (
            <Box key={joke.id} mb={4}>
              <Typography variant='h6'>{joke.setup}</Typography>

              <Box className='flex items-center'>
                <IconButton onClick={() => handleTogglePunchline(joke.id)} className='ml-2'>
                  {visiblePunchlines[joke.id] ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
                <Typography variant='body1'>{visiblePunchlines[joke.id] ? joke.punchline : '********'}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  )
}

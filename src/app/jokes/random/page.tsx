'use client'

import { Box, Container, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import LoadingAnim from '@/components/layout/LoadingAnim'
import { useGetRandomJokeQuery } from '@/store/slices/apiSlice'

export default function RandomJokePage() {
  const { data: joke, error, isLoading } = useGetRandomJokeQuery(undefined)
  const [visiblePunchline, setVisiblePunchline] = useState(false)

  const handleTogglePunchline = () => {
    setVisiblePunchline(!visiblePunchline)
  }

  return (
    <Container maxWidth='md' className='p-4 sm:p-6 md:p-8'>
      <Typography variant='h4' component='h1' className='text-center sm:text-left' gutterBottom>
        Random Joke
      </Typography>
      {isLoading && <LoadingAnim />}
      {error && <p>Error loading joke</p>}
      {joke && (
        <Box>
          <Typography variant='h6'>{joke.setup}</Typography>
          <Box className='flex items-center'>
            <IconButton onClick={() => handleTogglePunchline()} className='ml-2'>
              {visiblePunchline ? <FaEyeSlash /> : <FaEye />}
            </IconButton>
            <Typography variant='body1'>{visiblePunchline ? joke.punchline : '********'}</Typography>
          </Box>
        </Box>
      )}
    </Container>
  )
}

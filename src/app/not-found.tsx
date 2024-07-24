import { Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <Container className='flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center'>
      <Image src='/images/not-found.webp' alt='Not Found' width={400} height={400} className='mb-8' />
      <Typography variant='h3' className='mb-4 font-bold text-gray-800'>
        Oops! Page Not Found
      </Typography>
      <Typography variant='h5' className='mb-8 text-gray-600'>
        Looks like you're lost!
      </Typography>
      <Button
        variant='contained'
        color='primary'
        href='/'
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      >
        Go Home
      </Button>
    </Container>
  )
}

export default NotFound

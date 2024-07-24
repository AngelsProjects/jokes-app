'use client'

import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { Component, ReactNode } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          height='100vh'
          textAlign='center'
          className='p-4'
        >
          <FaExclamationTriangle size={50} className='mb-4 text-red-500' />
          <Typography variant='h4' component='h1' className='mb-4'>
            Something went wrong.
          </Typography>

          <Image
            src='/images/wrong.webp'
            alt='Wrong Answer'
            className='mb-4 h-64 w-full object-contain'
            width={64}
            height={64}
          />

          <Button variant='contained' color='primary' onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

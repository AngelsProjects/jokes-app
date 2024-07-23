import { Box, Skeleton, Typography } from '@mui/material'
import { keyframes, styled } from '@mui/system'
import React from 'react'

const shine = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

const AnimatedSkeleton = styled(Skeleton)`
  animation: ${shine} 1.2s ease-in-out infinite;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
`

const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        p: 4
      }}
    >
      <Typography variant='h4' component='div' gutterBottom>
        Loading...
      </Typography>
      <AnimatedSkeleton variant='rectangular' width={300} height={80} sx={{ mb: 2 }} />
      <AnimatedSkeleton variant='rectangular' width={300} height={80} sx={{ mb: 2 }} />
      <AnimatedSkeleton variant='rectangular' width={300} height={80} />
    </Box>
  )
}

export default Loading

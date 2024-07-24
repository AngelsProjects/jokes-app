import { Box, Typography } from '@mui/material'
import Image from 'next/image'

function LoadingAnim() {
  return (
    <Box>
      <Typography>Loading...</Typography>
      <Image src='/images/loading.gif' alt='Loading' width={200} height={200} />
    </Box>
  )
}

export default LoadingAnim

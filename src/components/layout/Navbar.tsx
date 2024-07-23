import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { FaHome, FaLaughBeam, FaPlus, FaRandom, FaRobot } from 'react-icons/fa'

export default function Navbar() {
  return (
    <AppBar position='static' className='bg-blue-500'>
      <Toolbar className='flex justify-between'>
        <Typography variant='h6' className='text-white'>
          Jokes App
        </Typography>
        <Box display='flex' alignItems='center'>
          <Link href='/' passHref>
            <IconButton color='inherit' className='text-white'>
              <FaHome />
            </IconButton>
          </Link>
          <Link href='/jokes' passHref>
            <IconButton color='inherit' className='text-white'>
              <FaLaughBeam />
            </IconButton>
          </Link>
          <Link href='/jokes/add' passHref>
            <IconButton color='inherit' className='text-white'>
              <FaPlus />
            </IconButton>
          </Link>
          <Link href='/jokes/random' passHref>
            <IconButton color='inherit' className='text-white'>
              <FaRandom />
            </IconButton>
          </Link>
          <Link href='/jokes/chatbot' passHref>
            <IconButton color='inherit' className='text-white'>
              <FaRobot />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

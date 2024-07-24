'use client'

import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FaHome, FaLaughBeam, FaPlus, FaRandom, FaRobot } from 'react-icons/fa'

export default function Navbar() {
  return (
    <AppBar position='static' className='bg-blue-500'>
      <Toolbar className='flex justify-between'>
        <Typography variant='h6' className='flex items-center gap-2 text-white'>
          <Image width={40} height={40} src='/images/logo.webp' alt='Logo' className='rounded-lg' />
          Jokes App
        </Typography>
        <Box display='flex' alignItems='center'>
          <Link href='/' passHref>
            <Tooltip title='Home'>
              <IconButton color='inherit' className='text-white'>
                <FaHome />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href='/jokes' passHref>
            <Tooltip title='Jokes'>
              <IconButton color='inherit' className='text-white'>
                <FaLaughBeam />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href='/jokes/add' passHref>
            <Tooltip title='Add Joke'>
              <IconButton color='inherit' className='text-white'>
                <FaPlus />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href='/jokes/random' passHref>
            <Tooltip title='Random Joke'>
              <IconButton color='inherit' className='text-white'>
                <FaRandom />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href='/jokes/chatbot' passHref>
            <Tooltip title='Chatbot'>
              <IconButton color='inherit' className='text-white'>
                <FaRobot />
              </IconButton>
            </Tooltip>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

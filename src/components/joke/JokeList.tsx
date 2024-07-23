import { Box, IconButton, List, ListItem, ListItemText } from '@mui/material'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { FaEdit, FaTrash } from 'react-icons/fa'

import { useDeleteJokeMutation } from '@/store/slices/apiSlice'
import { JokeListProps } from '@/types/joke'

export default function JokeList({ jokes }: JokeListProps) {
  const [deleteJoke] = useDeleteJokeMutation()

  return (
    <List>
      {jokes.map(joke => (
        <ListItem key={joke.id} className='mb-2 rounded bg-gray-100'>
          <ListItemText primary={joke.setup} secondary={joke.punchline} />
          <Box>
            <Link href={`/jokes/edit/${joke.id}`} passHref>
              <IconButton>
                <FaEdit />
              </IconButton>
            </Link>
            <IconButton onClick={() => deleteJoke(joke.id)}>
              <FaTrash />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  )
}

JokeList.propTypes = {
  jokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      setup: PropTypes.string.isRequired,
      punchline: PropTypes.string.isRequired
    })
  ).isRequired
}

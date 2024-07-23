import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import { useDeleteJokeMutation } from '../../store/apiSlice'
import Link from 'next/link'

export default function JokeList({ jokes }) {
  const [deleteJoke] = useDeleteJokeMutation()

  return (
    <List>
      {jokes.map((joke) => (
        <ListItem key={joke.id} className="bg-gray-100 rounded mb-2">
          <ListItemText
            primary={joke.setup}
            secondary={joke.punchline}
          />
          <Box>
            <Link href={`/jokes/edit/${joke.id}`} passHref>
              <IconButton>
                <Edit />
              </IconButton>
            </Link>
            <IconButton onClick={() => deleteJoke(joke.id)}>
              <Delete />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  )
}

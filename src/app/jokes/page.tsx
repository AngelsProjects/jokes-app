import { Container, Typography, Box, Button } from '@mui/material'
import { useGetJokesQuery } from '../../store/apiSlice'
import JokeList from '../components/JokeList'
import Link from 'next/link'

export default function JokesPage() {
  const { data: jokes, error, isLoading } = useGetJokesQuery()

  return (
    <Container maxWidth="md" className="p-4 sm:p-6 md:p-8">
      <Typography variant="h4" component="h1" className="text-center sm:text-left" gutterBottom>
        All Jokes
      </Typography>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading jokes</p>}
      {jokes && <JokeList jokes={jokes} />}
      <Box mt={4}>
        <Link href="/jokes/add" passHref>
          <Button variant="contained" color="primary">
            Add New Joke
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

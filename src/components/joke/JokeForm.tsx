import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TextField, Button, Box } from '@mui/material'
import { useAddJokeMutation, useEditJokeMutation, useGetJokesQuery } from '../../store/apiSlice'
import { useEffect } from 'react'

const schema = yup.object().shape({
  type: yup.string().required(),
  setup: yup.string().required(),
  punchline: yup.string().required(),
})

export default function JokeForm({ jokeId }) {
  const { register, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(schema),
  })
  const { data: jokes } = useGetJokesQuery()
  const [addJoke] = useAddJokeMutation()
  const [editJoke] = useEditJokeMutation()

  const onSubmit = async (data) => {
    if (jokeId) {
      await editJoke({ id: jokeId, ...data })
    } else {
      await addJoke(data)
    }
    reset()
  }

  useEffect(() => {
    if (jokeId && jokes) {
      const joke = jokes.find((j) => j.id === parseInt(jokeId))
      if (joke) {
        setValue('type', joke.type)
        setValue('setup', joke.setup)
        setValue('punchline', joke.punchline)
      }
    }
  }, [jokeId, jokes, setValue])

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        label="Type"
        {...register('type')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Setup"
        {...register('setup')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Punchline"
        {...register('punchline')}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  )
}
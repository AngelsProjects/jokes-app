'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, TextField } from '@mui/material'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useAppDispatch } from '@/store/hooks'
import { useAddJokeMutation, useEditJokeMutation, useGetJokesQuery } from '@/store/slices/apiSlice'
import { showSnackbar } from '@/store/slices/snackbarSlice'
import { Joke, JokeFormData, JokeFormProps } from '@/types/joke'

const schema = yup.object().shape({
  type: yup.string().required(),
  setup: yup.string().required(),
  punchline: yup.string().required()
})

export default function JokeForm({ jokeId }: JokeFormProps) {
  const dispatch = useAppDispatch()

  const { register, handleSubmit, reset, setValue } = useForm<JokeFormData>({
    resolver: yupResolver(schema)
  })

  const { data: jokes } = useGetJokesQuery(undefined, {
    skip: !jokeId
  })

  const [addJoke] = useAddJokeMutation()
  const [editJoke] = useEditJokeMutation()

  const onSubmit = async (data: JokeFormData) => {
    let snackMessage = { message: 'Joke added successfully!', severity: 'success' } as any

    if (jokeId) {
      await editJoke({ id: jokeId, ...data })
      snackMessage = { message: 'Joke updated successfully!', severity: 'success' } as any
    } else {
      await addJoke(data)
    }

    dispatch(showSnackbar(snackMessage))
    reset()
  }

  useEffect(() => {
    if (jokeId && jokes) {
      const joke = jokes.find((j: Joke) => j.id === parseInt(jokeId))

      if (joke) {
        setValue('type', joke.type)
        setValue('setup', joke.setup)
        setValue('punchline', joke.punchline)
      }
    }
  }, [jokeId, jokes, setValue])

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <TextField margin='normal' fullWidth label='Type' {...register('type')} />
      <TextField margin='normal' fullWidth label='Setup' {...register('setup')} />
      <TextField margin='normal' fullWidth label='Punchline' {...register('punchline')} />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  )
}

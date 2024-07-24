import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { FaEdit, FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa'

import { useAppDispatch } from '@/store/hooks'
import { useDeleteJokeMutation } from '@/store/slices/apiSlice'
import { showSnackbar } from '@/store/slices/snackbarSlice'
import { JokeListProps } from '@/types/joke'

export default function JokeList({ jokes, reloadJokes }: JokeListProps & { reloadJokes: () => void }) {
  const dispatch = useAppDispatch()
  const [deleteJoke] = useDeleteJokeMutation()
  const [visiblePunchlines, setVisiblePunchlines] = useState<{ [key: number]: boolean }>({})
  const [page, setPage] = useState(1)
  const rowsPerPage = 5

  const [openDialog, setOpenDialog] = useState(false)
  const [selectedJoke, setSelectedJoke] = useState<number | null>(null)

  const handleTogglePunchline = (id: number) => {
    setVisiblePunchlines(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const handleOpenDialog = (id: number) => {
    setSelectedJoke(id)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setSelectedJoke(null)
  }

  const handleDeleteJoke = async () => {
    if (selectedJoke !== null) {
      await deleteJoke(selectedJoke)
      dispatch(showSnackbar({ message: 'This is a success message!', severity: 'success' }))
      handleCloseDialog()
      reloadJokes()
    }
  }

  const paginatedJokes = jokes.slice((page - 1) * rowsPerPage, page * rowsPerPage)

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type of joke</TableCell>
              <TableCell>Setup</TableCell>
              <TableCell>Punchline</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedJokes.map(joke => (
              <TableRow key={joke.id}>
                <TableCell>{joke.type}</TableCell>
                <TableCell>{joke.setup}</TableCell>
                <TableCell>
                  <Box className='flex items-center'>
                    {visiblePunchlines[joke.id] ? joke.punchline : '********'}
                    <IconButton onClick={() => handleTogglePunchline(joke.id)} className='ml-2'>
                      {visiblePunchlines[joke.id] ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell>
                  <Link href={`/jokes/edit/${joke.id}`} passHref>
                    <IconButton className='text-blue-500'>
                      <FaEdit />
                    </IconButton>
                  </Link>
                  <IconButton onClick={() => handleOpenDialog(joke.id)} className='text-red-500'>
                    <FaTrash />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(jokes.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        className='mt-4'
      />

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Delete this joke?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this joke? Once it's gone, you'll miss out on the laughs it brings!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleDeleteJoke} color='secondary' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

JokeList.propTypes = {
  jokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      setup: PropTypes.string.isRequired,
      punchline: PropTypes.string.isRequired
    })
  ).isRequired,
  reloadJokes: PropTypes.func.isRequired
}

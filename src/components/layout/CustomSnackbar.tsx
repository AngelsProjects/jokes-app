'use client'

import { Alert, Snackbar } from '@mui/material'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { hideSnackbar } from '@/store/slices/snackbarSlice'
import { RootState } from '@/store/types'

const CustomSnackbar: FC = () => {
  const dispatch = useDispatch()
  const { open, message, severity } = useSelector((state: RootState) => state.snackbar)

  const handleClose = () => {
    dispatch(hideSnackbar())
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar

import { FC, useEffect } from 'react'
import { Template } from '../components/template'
import { Box, Container, Typography } from '@mui/material'
import { Reports } from '../components/reports/reports'
import { useSnackbar } from 'notistack'
import { useAppDispatch, useAppSelector } from '../store/store'
import { setError } from '../store/report/reportSlice'

export const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const { enqueueSnackbar: snackbar } = useSnackbar()
  const reportError = useAppSelector(state => state.report.error)
  useEffect(() => {
    if (reportError) {
      snackbar(reportError, { variant: 'error' })
      dispatch(setError(''))
    }
  }, [dispatch, reportError, snackbar])
  return (
    <Container>
      <Typography variant="h3" textAlign="center">Шаблоны</Typography>
      <Box display="flex">
        <Template title="Заказы на производство"/>
      </Box>
      <Reports/>
    </Container>
  )
}

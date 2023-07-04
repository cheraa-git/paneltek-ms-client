import { FC } from 'react'
import { Alert, Box, Typography } from '@mui/material'
import { IReport } from '../../types'
import { timestampToDateTime } from '../../utils/date'
import { LoadingButton } from '@mui/lab'

interface ReportPendingProps {
  report: IReport
}

export const ReportPending: FC<ReportPendingProps> = ({ report }) => {

  return (
    <Alert severity="info" sx={{ mb: 1 }} action={
      <Box textAlign="end">
        {/*<Button color="error">Отменить</Button>*/}
        <LoadingButton loading>sdf</LoadingButton>
        <Typography fontSize={12}>количество: {report.length}</Typography>
      </Box>
    }>
      <Typography alignSelf="center">"{report.title}"</Typography>
      <Typography fontSize={12}>создан в {timestampToDateTime(report.createdAt)}</Typography>

    </Alert>
  )
}

import { FC } from 'react'
import { Alert, Button, Typography } from '@mui/material'
import { IReport } from '../../types'
import { timestampToDateTime } from '../../utils/date'

interface ReportPendingProps {
  report: IReport
}

export const ReportPending: FC<ReportPendingProps> = ({ report }) => {

  return (
    <Alert severity="info" sx={{ mb: 1 }} action={<Button color="error">Отменить</Button>}>
      <Typography alignSelf="center">"{report.title}" (создан в {timestampToDateTime(report.createdAt)})</Typography>
    </Alert>
  )
}

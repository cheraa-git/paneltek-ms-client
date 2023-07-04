import { FC } from 'react'
import { Alert, Box, Button, Typography } from '@mui/material'
import { IReport } from '../../types'
import { timestampToDateTime } from '../../utils/date'

interface ReportCompletedProps {
  report: IReport
}

export const ReportCompleted: FC<ReportCompletedProps> = ({ report }) => {

  return (
    <Alert severity="success" sx={{ mb: 1 }} action={
      <Box textAlign="end">
        <Button className="content-end">Скачать</Button>
        <Typography fontSize={12}>завершен в {timestampToDateTime(report.completedAt)}</Typography>
      </Box>
    }>
      <Typography alignSelf="center">"{report.title}" (создан в {timestampToDateTime(report.createdAt)})</Typography>
    </Alert>
  )
}

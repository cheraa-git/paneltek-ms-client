import { FC } from 'react'
import { Alert, Box, Typography } from '@mui/material'
import { IReport } from '../../types'
import { timestampToDateTime } from '../../utils/date'

interface ReportCancelledProps {
  report: IReport
}

export const ReportCancelled: FC<ReportCancelledProps> = ({ report }) => {

  return (
    <Alert severity="error" sx={{ mb: 1 }} action={
      <Box textAlign="end">
        {/*<Button className="content-end">Повторить</Button>*/}
        <Typography fontSize={12}>отменен в {timestampToDateTime(report.completedAt)}</Typography>
      </Box>
    }>
      <Typography alignSelf="center">"{report.title}"</Typography>
      <Typography fontSize={12}>создан в {timestampToDateTime(report.createdAt)}</Typography>
    </Alert>
  )
}

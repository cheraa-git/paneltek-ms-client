import { FC, useState } from 'react'
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'
import { reportDateFormat } from '../utils/date'
import { requestReport } from '../store/report/reportActions'
import { useAppDispatch, useAppSelector } from '../store/store'
import { IfBox } from './ui/ifBox'
import { LoadingButton } from '@mui/lab'

interface TemplateProps {
  title: string
}

export const Template: FC<TemplateProps> = ({ title }) => {
  const dispatch = useAppDispatch()
  const { reports, loading } = useAppSelector(state => state.report)
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)
  const isPending = !!reports.find(report => report.status === 'pending')

  const handleSubmit = () => {
    if (startDate) {
      dispatch(requestReport(reportDateFormat(startDate), reportDateFormat(endDate)))
    }
  }

  return (
    <Card>
      <CardHeader title={title}/>
      <CardContent>
        <Box display="flex">
          <DateTimePicker ampm={false} value={startDate} onChange={e => setStartDate(e)}/>
          <Typography alignSelf="center" mx={2}>–</Typography>
          <DateTimePicker ampm={false} value={endDate} onChange={e => setEndDate(e)}/>
        </Box>
        <Box display="flex" justifyContent="end">
          <IfBox visible={isPending} mt={2}>
            <Typography alignSelf="center">Отчет формируется, это может занять некоторое время...</Typography>
          </IfBox>
          <IfBox visible={!isPending} mt={2}>
            <LoadingButton loading={loading} disabled={!startDate} variant="outlined" onClick={handleSubmit}>Создать</LoadingButton>
          </IfBox>

        </Box>
      </CardContent>
    </Card>
  )
}

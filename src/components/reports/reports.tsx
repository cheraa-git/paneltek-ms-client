import { FC, useEffect } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../../store/store'
import { getReports } from '../../store/report/reportActions'
import { ReportCompleted } from './reportCompleted'
import { ReportPending } from './reportPending'
import { ReportCancelled } from './reportCancelled'
import { Typography } from '@mui/material'

export const Reports: FC = () => {
  const dispatch = useAppDispatch()
  const { reports } = useAppSelector((state: RootState) => state.report)
  useEffect(() => {
    dispatch(getReports())
  }, [dispatch])
  return (
    <>
      <Typography variant="h3" textAlign="center" mt={3}>Отчеты</Typography>
      {reports.map(report => {
        if (report.status === 'completed') return <ReportCompleted report={report} key={report.id}/>
        if (report.status === 'cancelled') return <ReportCancelled report={report} key={report.id}/>
        if (report.status === 'pending') return <ReportPending report={report} key={report.id}/>
        return ''
      })}
    </>
  )
}

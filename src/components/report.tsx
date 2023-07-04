import { FC } from 'react'
import { IReport } from '../types'
import { Button } from './ui/button'
import { timestampToDateTime } from '../utils/date'
import { Div } from './ui/div'

interface ReportProps {
  report: IReport
}

export const Report: FC<ReportProps> = ({ report }) => {
  const getColor = () => {
    switch (report.status) {
      case 'cancelled':
        return 'bg-red-100'
      case 'completed':
        return 'bg-green-100'
      case 'pending':
        return 'bg-blue-100'
      default:
        return ''
    }
  }
  return (
    <div className={`border rounded flex justify-between mb-2 px-3 py-2 ${getColor()}`}>
      <p className="self-center">"{report.title}" (создан в {timestampToDateTime(report.createdAt)})</p>

      <Div className="text-end mb-0.5" visible={report.status === 'completed'}>
        <Button className="content-end" color="lite">Скачать</Button>
        <p className="text-gray-400 text-xs">завершен в {timestampToDateTime(report.completedAt)}</p>
      </Div>
    </div>
  )
}

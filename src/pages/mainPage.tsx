import { FC, useEffect } from 'react'
import { Template } from '../components/template'
import { RootState, useAppDispatch, useAppSelector } from '../store/store'
import { getReports } from '../store/report/reportActions'
import { Report } from '../components/report'

export const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const { reports } = useAppSelector((state: RootState) => state.report)
  useEffect(() => {
    dispatch(getReports())
  }, [dispatch])
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center">Шаблоны</h1>
      <div className="flex">
        <Template title="Заказы на производство"/>
      </div>
      <h1 className="text-3xl text-center">Отчеты</h1>
      {reports.map(report => <Report report={report} key={report.id}/>)}
    </div>
  )
}

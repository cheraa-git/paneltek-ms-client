import { FC } from 'react'
import { Report } from '../components/report'

export const MainPage: FC = () => {
  return (
    <div className="container border mx-auto">
      <h1 className='text-3xl text-center'>Отчеты</h1>
      <Report title="Заказы на производство"/>
    </div>
  )
}

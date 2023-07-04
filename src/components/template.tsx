import { FC, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Loader } from './ui/Loader/Loader'

interface TemplateProps {
  title: string
}

export const Template: FC<TemplateProps> = ({ title }) => {
  const [isLoading] = useState(false)

  return (
    <div className="rounded bg-gray-100 m-2 p-2 max-w-[400px]">
      <h3>{title}</h3>
      <Input placeholder="С" type="date" label="с"/>
      <Input placeholder="По" type="date" label="по"/>
      <div className="flex justify-end">
        {isLoading && <p>В течение нескольких минут появится ссылка для скачивания отчета</p>}
        {isLoading ? <div><Loader/></div> : <Button>Создать</Button>}
      </div>
    </div>
  )
}

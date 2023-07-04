import { FC, useState } from 'react'
import { Loader } from './ui/Loader/Loader'
import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'

interface TemplateProps {
  title: string
}

export const Template: FC<TemplateProps> = ({ title }) => {
  const [isLoading] = useState(false)

  return (
    <Card>
      <CardHeader title={title}/>
      <CardContent>
        <Box display="flex">
          <DateTimePicker ampm={false}/>
          <Typography alignSelf="center" mx={2}>–</Typography>
          <DateTimePicker ampm={false}/>
        </Box>
        <Box display="flex" justifyContent="end">
          {isLoading && <p>В течение нескольких минут появится ссылка для скачивания отчета</p>}
          {isLoading ? <div><Loader/></div> : <Button>Создать</Button>}
        </Box>
      </CardContent>
    </Card>
  )
}

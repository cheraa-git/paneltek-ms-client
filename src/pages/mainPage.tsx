import { FC } from 'react'
import { Template } from '../components/template'
import { Box, Container, Typography } from '@mui/material'
import { Reports } from '../components/reports/reports'

export const MainPage: FC = () => {


  return (
    <Container>
      <Typography variant="h3" textAlign="center">Шаблоны</Typography>
      <Box display="flex">
        <Template title="Заказы на производство"/>
      </Box>


      <Reports/>
    </Container>
  )
}

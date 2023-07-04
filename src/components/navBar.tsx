import { FC } from 'react'
import Logo from '../logo.png'
import { Box, Container } from '@mui/material'

export const NavBar: FC = () => {
  return (
    <Box bgcolor="#212936">
      <Container>
        <img src={Logo} alt="" width={250}/>
      </Container>
    </Box>
  )
}

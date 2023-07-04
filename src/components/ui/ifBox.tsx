import { FC, ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface DivProps extends BoxProps {
  children?: ReactNode
  visible?: boolean
}

export const IfBox: FC<DivProps> = ({ children, visible, ...props }) => {
  return (
    <>
      {visible &&
        <Box {...props}>
          {children}
        </Box>
      }
    </>
  )
}

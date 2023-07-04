import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

interface DivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
  visible?: boolean
}

export const Div: FC<DivProps> = ({ children, visible, ...props }) => {
  return (
    <>
      {visible &&
        <div {...props}>
          {children}
        </div>
      }
    </>
  )
}

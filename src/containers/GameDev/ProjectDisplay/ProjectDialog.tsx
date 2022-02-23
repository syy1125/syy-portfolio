import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { styled } from '@mui/material/styles'
import { TransitionProps } from '@mui/material/transitions'

interface Props {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  subtitle: string
  inspirations?: string[]
  children: React.ReactNode | React.ReactNode[]
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Content = styled(DialogContent, { name: 'Content' })(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

const InspirationList = styled('ul', { name: 'InspirationList' })({
  margin: 0,
})

const Spacer = styled('div', { name: 'Spacer' })({
  flexGrow: 1,
})

export const ProjectDialog = ({
  open,
  onClose,
  title,
  subtitle,
  inspirations,
  children,
}: Props) => {
  return (
    <Dialog
      maxWidth="lg"
      fullWidth
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <Content>
        <DialogContentText>{subtitle}</DialogContentText>
        {inspirations ? (
          <DialogContentText variant="subtitle2">
            Inspirations:{' '}
            {inspirations.length > 2 ? (
              <InspirationList>
                {inspirations.map((item) => (
                  <li>{item}</li>
                ))}
              </InspirationList>
            ) : (
              inspirations.join(', ')
            )}
          </DialogContentText>
        ) : null}
        {children}
      </Content>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Close
        </Button>
        <Spacer />
      </DialogActions>
    </Dialog>
  )
}

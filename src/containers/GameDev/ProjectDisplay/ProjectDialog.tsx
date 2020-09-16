import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  subtitle: string
  inspirations?: string[]
  children: React.ReactNode | React.ReactNode[]
}

const useStyles = makeStyles((theme) => ({
  content: {
    color: theme.palette.text.secondary,
  },
  inspirationList: {
    margin: 0,
  },
  spacer: {
    flexGrow: 1,
  },
}))

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const ProjectDialog = ({
  open,
  onClose,
  title,
  subtitle,
  inspirations,
  children,
}: Props) => {
  const classes = useStyles()

  return (
    <Dialog
      maxWidth="lg"
      fullWidth
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText>{subtitle}</DialogContentText>
        {inspirations ? (
          <DialogContentText variant="subtitle2">
            Inspirations:{' '}
            {inspirations.length > 2 ? (
              <ul className={classes.inspirationList}>
                {inspirations.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            ) : (
              inspirations.join(', ')
            )}
          </DialogContentText>
        ) : null}
        {children}
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose}>
          Close
        </Button>
        <div className={classes.spacer} />
      </DialogActions>
    </Dialog>
  )
}

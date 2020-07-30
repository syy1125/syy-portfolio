import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Theme } from '@material-ui/core/styles'

export const SmallAlert = () => {
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'))
  const [dismissed, setDismissed] = useState(false)

  return (
    <Dialog open={xs && !dismissed}>
      <DialogTitle>Screen too small!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          I did my best to squish down content so that it works on smaller
          displays. However, this screen is simply too small. While all of the
          content will still be visible, they may look a bit weird as they get
          pushed out of their normal places.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => setDismissed(true)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

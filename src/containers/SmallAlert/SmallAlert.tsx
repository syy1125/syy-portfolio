import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'

export const SmallAlert = () => {
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
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

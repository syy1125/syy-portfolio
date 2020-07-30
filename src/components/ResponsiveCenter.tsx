import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

interface Props {
  children?: React.ReactChild | React.ReactChild[]
}

export const ResponsiveCenter = ({ children }: Props) => {
  return (
    <Grid container>
      <Hidden smDown>
        <Grid item md={2} lg={3} />
      </Hidden>
      <Grid item xs={12} md={8} lg={6}>
        {children}
      </Grid>
      <Hidden smDown>
        <Grid item md={2} lg={3} />
      </Hidden>
    </Grid>
  )
}

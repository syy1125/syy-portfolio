import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

interface Props {
  children?: React.ReactChild | React.ReactChild[]
}

export const ResponsiveCenter = ({ children }: Props) => {
  return (
    <Grid container>
      <Grid item xs />
      <Grid item xs={12} md={10} lg={8} xl={6}>
        {children}
      </Grid>
      <Grid item xs />
    </Grid>
  )
}

import React from 'react'
import Grid from '@material-ui/core/Grid'
import Text from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { ResponsiveCenter } from '../../components/ResponsiveCenter'
import { R3 } from './projects/R3'
import { Spinball } from './projects/Spinball'
import { Streamline } from './projects/Streamline'
import { LitestD } from './projects/LitestD'
import { ArtificialGravity } from './projects/ArtificialGravity'
import { ProjectStardust } from './projects/ProjectStardust'

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.divider,
    '&:first-child': {
      marginTop: theme.spacing(2),
    },
    '&:not(:first-child)': {
      marginTop: theme.spacing(5),
    },
  },
}))

export const GameDev = () => {
  const classes = useStyles()

  return (
    <ResponsiveCenter>
      <Grid container>
        <Grid item xs={12} className={classes.sectionTitle}>
          <Text variant="h4">Ongoing Project(s)</Text>
        </Grid>
        <Grid item xs={12}>
          <Text>
            These are the game project(s) I'm currently actively working on.
          </Text>
        </Grid>
        <R3 />
        <Grid item xs />
        <Grid item xs={12} className={classes.sectionTitle}>
          <Text variant="h4">Favourite Projects</Text>
        </Grid>
        <Grid item xs={12}>
          <Text>
            These are my favourite projects, both in terms of player experience
            and in terms of how much fun I had when working on them. I believe
            these represet the best of my work in games development.
          </Text>
        </Grid>
        <Spinball />
        <Streamline />
        <LitestD />
        <Grid item xs />
        <Grid item xs={12} className={classes.sectionTitle}>
          <Text variant="h4">Other Past Projects</Text>
        </Grid>
        <Grid item xs={12}>
          <Text>
            I enjoy experimenting in my game projects. While some of those are
            successful, often they don't work out the way I want them to. Here
            are some other game development projects that I was involved in.
            <br />
            Although I'm not very satisfied with the results, I have learned a
            great deal through working on these projects.
          </Text>
        </Grid>
        <ArtificialGravity />
        <ProjectStardust />
        <Grid item xs />
      </Grid>
    </ResponsiveCenter>
  )
}

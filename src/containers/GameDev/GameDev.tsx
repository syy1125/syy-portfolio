import React from 'react'
import Grid from '@mui/material/Grid'
import Text from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { ResponsiveCenter } from '../../components/ResponsiveCenter'
import { OberthEffect } from './projects/OberthEffect'
import { Spinball } from './projects/Spinball'
import { Streamline } from './projects/Streamline'
import { LitestD } from './projects/LitestD'
import { ArtificialGravity } from './projects/ArtificialGravity'
import { ProjectStardust } from './projects/ProjectStardust'

const SectionTitle = styled(Grid, { name: 'SectionTitle' })(({ theme }) => ({
  borderBottom: `solid 2px ${theme.palette.divider}`,
  marginTop: theme.spacing(3),
  '&:first-child': {
    marginTop: theme.spacing(2),
  },
}))

export const GameDev = () => {
  return (
    <ResponsiveCenter>
      <Grid container>
        <SectionTitle item xs={12}>
          <Text variant="h4">Ongoing Project(s)</Text>
        </SectionTitle>
        <Grid item xs={12}>
          <Text>
            These are the game project(s) I'm currently actively working on.
          </Text>
        </Grid>
        <OberthEffect />
        <Grid item xs />
        <SectionTitle item xs={12}>
          <Text variant="h4">Favourite Projects</Text>
        </SectionTitle>
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
        <SectionTitle item xs={12}>
          <Text variant="h4">Other Past Projects</Text>
        </SectionTitle>
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

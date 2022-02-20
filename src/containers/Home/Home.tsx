import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Text from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from 'react-router-dom'

import profile from '../../assets/profile_image.jpg'
import { ResponsiveCenter } from '../../components/ResponsiveCenter'

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    padding: theme.spacing(2),
  },
  imageContainer: {
    position: 'relative',
    '&::before': {
      display: 'block',
      content: '""',
      paddingTop: '100%',
    },
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'left',
    padding: theme.spacing(2),
  },
  subtitle: {
    textAlign: 'right',
  },
  extraNotes: {
    textAlign: 'right',
    paddingTop: theme.spacing(2),
    color: theme.palette.grey[500],
  },
  sectionBody: {
    padding: `${theme.spacing(1)} ${theme.spacing(5)}`,
  },
}))

export const Home = () => {
  const classes = useStyles()
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  return (
    <ResponsiveCenter>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper>
            <Grid container alignItems="stretch">
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                className={classes.imageContainer}
              >
                <img src={profile} alt="Profile" className={classes.image} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                lg={8}
                container
                direction="column"
                className={classes.titleContainer}
              >
                <Text variant={lg ? 'h3' : 'h4'} className={classes.title}>
                  Jack (Yunyang) Sun
                </Text>
                <Text variant="h5" className={classes.subtitle}>
                  Student at University of California, Irvine
                  <br />
                  Games Programming and Astrophysics major
                </Text>
                <Text variant="subtitle1" className={classes.extraNotes}>
                  Also a:
                  <br />
                  Kerbonaut
                  <br />
                  Space core
                  <br />
                  Sci-fi and fantasy enthusiast
                  <br />
                  Cactus hugger (obviously)
                </Text>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Text variant="h4" className={classes.title}>
              About Me
            </Text>
            <Text className={classes.sectionBody}>
              Hello! I'm Jack. I'm currently a 4th year UCI student looking for
              internship opportunities in the games industry.
            </Text>
            <Text className={classes.sectionBody}>
              As a member of the Video Game Development Club at UCI, I have
              contributed to various projects in the club. Go check them out at
              the <Link to="/game-dev">Game Dev</Link> page, where I talk about
              some of them in detail!
            </Text>
            <Text className={classes.sectionBody}>
              As a games programmer, I have a good amount of experience writing
              Unity C#. I enjoy establishing flexible data-driven tools that
              enable designers to easily create game content. Occasionally I
              would also dive into HLSL shaders to make my game look better!
            </Text>
            <Text className={classes.sectionBody}>
              As an astrophysicist, I enjoy employing realistic physics in my
              games. I admire Kerbal Space Program because of this - KSP manages
              to be both fun and educational at the same time, and I aim to
              capture that in my games as well.
            </Text>
            <Text className={classes.sectionBody}>
              Again, head over to the <Link to="/game-dev">Game Dev</Link> page
              to check out my projects!
            </Text>
          </Paper>
        </Grid>
      </Grid>
    </ResponsiveCenter>
  )
}

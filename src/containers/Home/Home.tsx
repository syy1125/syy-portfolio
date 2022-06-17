import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Text from '@mui/material/Typography'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from 'react-router-dom'

import profile from '../../assets/profile_image.jpg'
import { ResponsiveCenter } from '../../components/ResponsiveCenter'

const TitleContainer = styled(Grid, { name: 'TitleContainer' })(
  ({ theme }) => ({
    padding: theme.spacing(2),
  })
)

const ImageContainer = styled(Grid, { name: 'ImageContainer' })({
  position: 'relative',
  '&::before': {
    display: 'block',
    content: '""',
    paddingTop: '100%',
  },
})

const Image = styled('img', { name: 'Image' })({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
})

const TitleText = styled(Text, { name: 'TitleText' })(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(2),
}))

const SectionBody = styled(Text, { name: 'SectionBody' })(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(5)}`,
}))

export const Home = () => {
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  return (
    <ResponsiveCenter>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper>
            <Grid container alignItems="stretch">
              <ImageContainer item xs={12} sm={6} lg={4}>
                <Image src={profile} alt="Profile" />
              </ImageContainer>
              <TitleContainer
                item
                xs={12}
                sm={6}
                lg={8}
                container
                direction="column"
              >
                <TitleText variant={lg ? 'h3' : 'h4'}>
                  Jack (Yunyang) Sun
                </TitleText>
                <Text
                  variant="h5"
                  sx={{ textAlign: 'right', fontSize: '1.2rem' }}
                >
                  Student at University of California, Irvine
                  <br />
                  Computer Game Science and Astrophysics major
                </Text>
                <Text
                  variant="subtitle1"
                  sx={{ textAlign: 'right', pt: 2, color: 'text.secondary' }}
                >
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
              </TitleContainer>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <TitleText variant="h4">About Me</TitleText>
            <SectionBody>
              Hello! I'm Jack. I'm recent UCI graduate looking to enter the
              games industry.
            </SectionBody>
            <SectionBody>
              As a member of the Video Game Development Club at UCI, I have
              contributed to various projects in the club. Go check them out at
              the <Link to="/game-dev">Game Dev</Link> page, where I talk about
              some of them in detail!
            </SectionBody>
            <SectionBody>
              As a games programmer, I have a good amount of experience writing
              Unity C#. I enjoy establishing flexible data-driven tools that
              enable designers to easily create game content. Occasionally I
              would also dive into HLSL shaders to make my game look better!
            </SectionBody>
            <SectionBody>
              As an astrophysicist, I enjoy employing realistic physics in my
              games. My aim is for my games to be more than just entertainment.
              I want my games to be capable of teaching the player something
              about how the world works.
            </SectionBody>
            <SectionBody>
              Again, head over to the <Link to="/game-dev">Game Dev</Link> page
              to check out my projects!
            </SectionBody>
          </Paper>
        </Grid>
      </Grid>
    </ResponsiveCenter>
  )
}

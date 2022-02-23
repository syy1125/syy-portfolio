import React, { useState } from 'react'
import ButtonBase from '@mui/material/ButtonBase'
import Grid from '@mui/material/Grid'
import { alpha, styled } from '@mui/material/styles'
import Text from '@mui/material/Typography'

import { useHistory } from 'react-router-dom'

interface Props {
  title: React.ReactNode
  detailsPath: string
  imageUrl?: string
  tagline: string
  links?: Array<{ title: string; href: string }>
}

const GridCard = styled(Grid, { name: 'GridCard' })({
  position: 'relative',
  '&::before': {
    content: '""',
    paddingTop: '80%',
    display: 'block',
  },
})

const Panel = styled('div', { name: 'Panel' })({
  position: 'absolute',
  left: 4,
  right: 4,
  top: 4,
  bottom: 4,
})

const ImageBackground = styled('img', { name: 'ImageBackground' })({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

const TextPanel = styled(Panel, { name: 'TextBackground' })({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid grey',
})

const Backdrop = styled(Panel, { name: 'Backdrop' })(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
  [`${GridCard}:hover &`]: {
    opacity: 0.75,
  },
}))

const Foreground = styled(Panel, { name: 'Foreground' })(({ theme }) => ({
  opacity: 0,
  transition: theme.transitions.create('opacity'),
  [`${GridCard}:hover &`]: {
    opacity: 1,
  },

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  padding: theme.spacing(2),
  color: theme.palette.common.white,
}))

const TitleContainer = styled('div', { name: 'TitleContainer' })({
  flexBasis: 0,
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Title = styled(Text, { name: 'Title' })({
  fontWeight: 'bold',
  userSelect: 'none',
})

const DescriptionContainer = styled('div', { name: 'DescriptionContainer' })(
  ({ theme }) => ({
    flexBasis: 0,
    flexGrow: 1,
    padding: `0px ${theme.spacing(1)}`,
    display: 'flex',
    justifyContent: 'center',
  })
)

const Description = styled(Text, { name: 'Description' })({
  userSelect: 'none',
})

const ButtonsBar = styled('div', { name: 'ButtonsBar' })({
  flexBasis: 0,
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Button = styled(ButtonBase, { name: 'Button' })(({ theme }) => ({
  margin: `0px ${theme.spacing(0.5)}`,
  padding: theme.spacing(1),
  border: `solid 2px ${alpha(theme.palette.common.white, 0)}`,
  transition: theme.transitions.create('border-color'),
  '&:hover': {
    borderColor: alpha(theme.palette.common.white, 0.8),
  },
  fontFamily: theme.typography.fontFamily,
  fontSize: 14,
})) as typeof ButtonBase

export const ProjectCard = (props: Props) => {
  const history = useHistory()
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <GridCard item xs={6} md={4}>
      {props.imageUrl != null && !imageFailed ? (
        <Panel>
          <ImageBackground
            src={props.imageUrl}
            alt="Game thumbnail"
            onError={() => setImageFailed(true)}
          />
        </Panel>
      ) : (
        <TextPanel>
          <Text variant="h4">{props.title}</Text>
        </TextPanel>
      )}
      <Backdrop />
      <Foreground>
        <TitleContainer>
          <Title variant="h5">{props.title}</Title>
        </TitleContainer>
        <DescriptionContainer>
          <Description>{props.tagline}</Description>
        </DescriptionContainer>
        <ButtonsBar>
          {props.detailsPath ? (
            <Button onClick={() => history.push(props.detailsPath)}>
              Details
            </Button>
          ) : null}
          {props.links?.map(({ title, href }) => (
            <Button key={href} component="a" href={href}>
              {title}
            </Button>
          ))}
        </ButtonsBar>
      </Foreground>
    </GridCard>
  )
}

import React, { useState } from 'react'
import ButtonBase from '@mui/material/ButtonBase'
import Grid from '@mui/material/Grid'
import Text from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'

import { useHistory } from 'react-router-dom'
import classnames from 'classnames'

interface Props {
  title: React.ReactNode
  detailsPath: string
  imageUrl?: string
  tagline: string
  links?: Array<{ title: string; href: string }>
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '&::before': {
      content: '""',
      paddingTop: '80%',
      display: 'block',
    },
  },
  fill: {
    position: 'absolute',
    left: 4,
    right: 4,
    top: 4,
    bottom: 4,
  },
  background: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  fallbackBackground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid grey',
  },
  backdrop: {
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
    '$root:hover &': {
      opacity: 0.75,
    },
  },
  foreground: {
    opacity: 0,
    transition: theme.transitions.create('opacity'),
    '$root:hover &': {
      opacity: 1,
    },

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: theme.spacing(2),
    color: theme.palette.common.white,
  },
  titleContainer: {
    flexBasis: 0,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    userSelect: 'none',
  },
  descriptionContainer: {
    flexBasis: 0,
    flexGrow: 1,
    padding: `0px ${theme.spacing(1)}`,
    display: 'flex',
    justifyContent: 'center',
  },
  description: {
    userSelect: 'none',
  },
  buttonsBar: {
    flexBasis: 0,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: `0px ${theme.spacing(0.5)}`,
    padding: theme.spacing(1),
    border: `solid 2px ${alpha(theme.palette.common.white, 0)}`,
    transition: theme.transitions.create('border-color'),
    '&:hover': {
      borderColor: alpha(theme.palette.common.white, 0.8),
    },
    fontFamily: theme.typography.fontFamily,
    fontSize: 14,
  },
}))

export const ProjectCard = (props: Props) => {
  const classes = useStyles()
  const history = useHistory()
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <Grid item xs={6} md={4} className={classes.root}>
      {props.imageUrl != null && !imageFailed ? (
        <div className={classes.fill}>
          <img
            src={props.imageUrl}
            className={classes.background}
            alt="Game thumbnail"
            onError={() => setImageFailed(true)}
          />
        </div>
      ) : (
        <div className={classnames(classes.fill, classes.fallbackBackground)}>
          <Text variant="h4">{props.title}</Text>
        </div>
      )}
      <div className={classnames(classes.fill, classes.backdrop)} />
      <div className={classnames(classes.fill, classes.foreground)}>
        <div className={classes.titleContainer}>
          <Text variant="h5" className={classes.title}>
            {props.title}
          </Text>
        </div>
        <div className={classes.descriptionContainer}>
          <Text className={classes.description}>{props.tagline}</Text>
        </div>
        <div className={classes.buttonsBar}>
          {props.detailsPath ? (
            <ButtonBase
              className={classes.button}
              onClick={() => history.push(props.detailsPath!)}
            >
              Details
            </ButtonBase>
          ) : null}
          {props.links?.map(({ title, href }) => (
            <ButtonBase
              key={href}
              component="a"
              className={classes.button}
              href={href}
            >
              {title}
            </ButtonBase>
          ))}
        </div>
      </div>
    </Grid>
  )
}

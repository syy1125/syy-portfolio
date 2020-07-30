import React from 'react'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import Text from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
  imageUrl?: string
  link?: string
  title: React.ReactNode
  description: string
  details: React.ReactNode
  reverse?: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: (props: Props) => (props.reverse ? 'row-reverse' : 'row'),
    height: 300,
    margin: theme.spacing(1),
  },
  image: {
    objectFit: 'contain',
  },
  content: {
    margin: `0px ${theme.spacing(2)}px`,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: (props: Props) => (props.reverse ? 'flex-end' : 'flex-start'),
    justifyContent: 'center',
  },
  link: {
    cursor: 'pointer',
  },
}))

export const Card = (props: Props) => {
  const { imageUrl, title, description, details, link } = props
  const classes = useStyles(props)
  const TitleComponent = link != null ? Link : Text

  return (
    <Paper elevation={2} className={classes.root}>
      {imageUrl != null ? <img src={imageUrl} alt="icon" /> : null}
      <div className={classes.content}>
        <TitleComponent href={link} variant="h4" className={classes.link}>
          {title}
        </TitleComponent>
        <Text variant="h6">{description}</Text>
        {details}
      </div>
    </Paper>
  )
}

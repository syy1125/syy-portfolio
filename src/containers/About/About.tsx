import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import Markdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles'
import { ResponsiveCenter } from '../../components/ResponsiveCenter'

const { PUBLIC_URL } = process.env

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}))

export const About = () => {
  const classes = useStyles()
  const [document, setDocument] = useState<string | null>(null)
  useEffect(() => {
    fetch(`${PUBLIC_URL}/resources/about.md`)
      .then((response) => response.text())
      .then((markdown) => setDocument(markdown))
  }, [setDocument])

  return (
    <ResponsiveCenter>
      <Paper className={classes.paper}>
        {document == null ? (
          <CircularProgress />
        ) : (
          <Markdown children={document} />
        )}
      </Paper>
    </ResponsiveCenter>
  )
}

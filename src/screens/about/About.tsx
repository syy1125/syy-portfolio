import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import Markdown from 'react-markdown'

const { PUBLIC_URL } = process.env

export const About = () => {
  const [document, setDocument] = useState<string | null>(null)
  useEffect(() => {
    fetch(`${PUBLIC_URL}/resources/about.md`)
      .then((response) => response.text())
      .then((markdown) => setDocument(markdown))
  }, [setDocument])

  return (
    <Paper>
      {document == null ? <CircularProgress /> : <Markdown source={document} />}
    </Paper>
  )
}

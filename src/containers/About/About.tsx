import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress'
import Markdown from 'react-markdown'
import { ResponsiveCenter } from '../../components/ResponsiveCenter'

const { PUBLIC_URL } = process.env

export const About = () => {
  const [document, setDocument] = useState<string | null>(null)
  useEffect(() => {
    fetch(`${PUBLIC_URL}/resources/about.md`)
      .then((response) => response.text())
      .then((markdown) => setDocument(markdown))
  }, [setDocument])

  return (
    <ResponsiveCenter>
      <Paper sx={{ m: 1, p: 1 }}>
        {document == null ? (
          <CircularProgress />
        ) : (
          <Markdown children={document} />
        )}
      </Paper>
    </ResponsiveCenter>
  )
}

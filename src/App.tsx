import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { theme } from './theme'
import { Main } from './Main'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </ThemeProvider>
)

export default App

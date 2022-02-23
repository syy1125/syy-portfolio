import React from 'react'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { theme } from './theme'
import { Main } from './Main'

const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>
)

export default App

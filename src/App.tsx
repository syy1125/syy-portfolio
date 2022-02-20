import React from 'react'
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { theme } from './theme'
import { Main } from './Main'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

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

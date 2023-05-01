import {  createTheme } from '@mui/material/styles'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {useMemo} from 'react'
import { themeSettings } from './Theme'
function App() {
  const theme = useMemo(()=>
    createTheme(themeSettings)
  ,[])
  

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      hello world
      </ThemeProvider>
        
    </div>
  )
}

export default App

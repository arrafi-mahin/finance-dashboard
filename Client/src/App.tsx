import {  createTheme } from '@mui/material/styles'
import {Box, CssBaseline, ThemeProvider} from '@mui/material'
import {useMemo} from 'react'
import { themeSettings } from './Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Navbar/Navbar'
import Dashboard from './Pages/Dashboard/Dashboard'
function App() {
  const theme = useMemo(()=>
    createTheme(themeSettings)
  ,[])
  

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/predections" element={<div>predections page</div>} />
        </Routes>
      </Box>
      </ThemeProvider>
        </BrowserRouter>
    </div>
  )
}

export default App

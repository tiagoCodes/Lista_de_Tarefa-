import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Pages/Login'
import Production from './Pages/Production'
import { GlobalStyles } from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Production/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './HomePage.tsx'
import FindColorPage from './FindColorPage';


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <FindColorPage />
  </StrictMode>,

)

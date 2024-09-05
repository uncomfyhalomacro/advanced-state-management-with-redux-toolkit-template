import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

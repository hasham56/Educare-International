import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewDesignApp from './new-design/NewDesignApp.jsx'

// Lightweight path routing: the home page ("/") renders the original App
// untouched; everything under "/new-design" renders the redesigned experience.
const path = window.location.pathname.replace(/\/+$/, '')
const isNewDesign = path === '/new-design' || path.startsWith('/new-design/')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isNewDesign ? <NewDesignApp /> : <App />}
  </StrictMode>,
)

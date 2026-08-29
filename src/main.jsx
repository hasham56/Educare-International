import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './new-design/NewDesignApp.jsx'

// The redesign is now the site. The previous design is kept, unrouted, in
// src/_original-design/ — see the README there to bring it back.
//
// "/new-design" was the redesign's old address, so anyone holding that link
// lands on the same page; tidy the URL rather than serve it as a second copy.
if (window.location.pathname.replace(/\/+$/, '') === '/new-design') {
  window.history.replaceState(null, '', '/' + window.location.hash)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

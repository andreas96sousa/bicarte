import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('body')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)

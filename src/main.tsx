import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const rootNode = (
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

createRoot(document.getElementById('root')!).render(rootNode as React.ReactNode)


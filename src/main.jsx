import { Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>,
  </Router>
)

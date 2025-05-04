import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
// import './commonResource/css/styles.css'

import App from './App.jsx'
// src/main.jsx (or wherever your root render is)

// bootstrap css & js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


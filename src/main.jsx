import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import UserContext from './Context/UserContext.jsx'
=======
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
    <UserContext>
    <App />
    </UserContext>
    </BrowserRouter>
=======
    <App />
>>>>>>> bead919e19f2ac5de2407f429dbc33e5b543d11b
  </StrictMode>,
)

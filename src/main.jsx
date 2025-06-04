import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import UserContext from './Context/UserContext.jsx'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <UserContext>
    <App />
    </UserContext>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)

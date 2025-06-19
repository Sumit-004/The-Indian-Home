import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import PageContext from './Context/PageContext.jsx'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { AuthProvider } from "./Context/AuthContext"; // import here


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PageContext>
        <AuthProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </AuthProvider>
      </PageContext>
    </Provider>
  </BrowserRouter>
)

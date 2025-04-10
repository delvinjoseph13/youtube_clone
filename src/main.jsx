import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/Home.jsx'
import ProtectRoute from './components/ProtectRoute.jsx'
import RegisterPage from './pages/RegisterPage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)

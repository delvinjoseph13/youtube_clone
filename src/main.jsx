import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/Home.jsx'
import ProtectRoute from './components/ProtectRoute.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const app=createBrowserRouter([
  {
    path:'/Main',
    element:<App/>
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/register',
    element:<RegisterPage/>
  },
  {
    path:'/home',
    element:
  
        <HomePage/>

    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={app}/>
  </StrictMode>,
)

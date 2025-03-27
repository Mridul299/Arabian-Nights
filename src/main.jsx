import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './Routes/About.jsx'
import FAQ from './Routes/FAQ.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/About",
    element:<About></About>
  },
  {
    path:"/FAQ",
    element:<FAQ></FAQ>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

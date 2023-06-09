import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './components/global.css'
import Sidebar from './components/Sidebar'
import { router } from './Routes'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   
      <RouterProvider router={router}/>
     
  </React.StrictMode>,
)

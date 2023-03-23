import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './components/global.css'
import Sidebar from './components/Sidebar'
import { router } from './Routes'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='Layout'>
      <Sidebar />
      <div className="content">
      <RouterProvider router={router}/>
      </div>

    </div>
  </React.StrictMode>,
)

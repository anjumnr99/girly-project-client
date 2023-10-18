import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myCreatedRouters from './Routers/myCreatedRouters.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreatedRouters} />
    </AuthProvider>
  </React.StrictMode>,
)

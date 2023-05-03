import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider, { AuthContext } from './context/AuthProvider/AuthProvider'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider>
      </AuthProvider>
  </React.StrictMode>,
)

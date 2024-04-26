import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './pages';
import './index.css'

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/goit-react-hw-05-movies/' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './views/Main.tsx'
import Step1 from './views/Step1.tsx'
import Step2 from './views/Step2.tsx'
import Step3 from './views/Step3.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/step1",
    element: <Step1 />,
  },
  {
    path: "/step2",
    element: <Step2 />,
  },
  {
    path: "/step3",
    element: <Step3 />,
  },
],
{
  basename: import.meta.env.BASE_URL,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

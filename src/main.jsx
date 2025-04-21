import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Root from './assets/Component/Root/Root.jsx'
import About from './assets/Component/Induration/About.jsx'
import ME from './assets/Component/Induration/ME.jsx'
import Skill from './assets/Component/Induration/Skill.jsx'
const router=new createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },{
        path:'/me',
        element:<ME></ME>
      },{
        path:'/skill',
        element:<Skill></Skill>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

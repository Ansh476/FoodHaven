import React from 'react'
import { lazy , Suspense } from 'react'
import Applayout from './components/Applayout'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Body from './components/Body'
import RestoMenu from './components/RestoMenu'
import Cart from './components/Cart'
// import Grocery from './components/Grocery'


const Grocery = lazy(()=>import('./components/Grocery'));
// lazy loading , dynamic bundling , code splitting 

function App() {
  const routerapp = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        // {
        //   path:"/grocery",
        //   element:<Grocery/>
        // },
        {
          path:"/grocery",
          element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
        },
        {
          path:"/restuarents/:resid",
          element:<RestoMenu/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ],
      errorElement:<Error/>
    }
  ])

  return (
    <>
    <RouterProvider router={routerapp}></RouterProvider>
    </>
  )
}

export default App

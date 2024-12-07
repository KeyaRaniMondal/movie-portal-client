import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AddMovie from './pages/addMovie';
import MainLayout from './mainLayout';
import MyFavourite from './pages/myFavourites';

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>
      },
      {
        path: "/favourite",
        element: <MyFavourite></MyFavourite>
      },
      {
        path: "/features",
        element: <MyFavourite></MyFavourite>
      },
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

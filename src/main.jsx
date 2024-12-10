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
import Register from './pages/register';
import Login from './pages/login';
import AuthProvider from './providers/authProviders';
import AllMovies from './pages/allMovies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>
      },
      {
        path: "/favourite",
        element: <MyFavourite></MyFavourite>
      },
      {
        path: "/features",
        element: <MyFavourite></MyFavourite>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

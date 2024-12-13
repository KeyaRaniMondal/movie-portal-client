import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/addMovie";
import MainLayout from "./mainLayout";
import MyFavourite from "./pages/myFavourites";
import Register from "./pages/register";
import Login from "./pages/login";
import AuthProvider from "./providers/authProviders";
import AllMovies from "./pages/allMovies";
import PrivateRoute from "./privateRoute";
import MovieDetails from "./components/movieDetail";
import Error from "./pages/error";
import UpdateMovie from "./components/updateMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://movie-portal-server-rouge.vercel.app/movies"), 
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/movie/update/:id", 
        element: (
          <PrivateRoute>
            <UpdateMovie />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://movie-portal-server-rouge.vercel.app/movies/${params.id}`),
      },
      
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>, 
        loader: () => fetch("https://movie-portal-server-rouge.vercel.app/movies"),
      },
      {
        path: "/movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://movie-portal-server-rouge.vercel.app/movies/${params.id}`)
      },

      {
        path: "/favourite",
        element: <MyFavourite></MyFavourite>,
        loader: () => fetch("https://movie-portal-server-rouge.vercel.app/favourites"), // Consistently use "favourites"
      },
      
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/movies"), 
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>, 
        loader: () => fetch("http://localhost:5000/movies"),
      },
      {
        path: "/movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movies/${params.id}`)
      },

      {
        path: "/favourite",
        element: <MyFavourite></MyFavourite>,
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


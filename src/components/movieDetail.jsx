import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/authProviders";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!movie) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">Movie Not Found</h1>
        <button
          onClick={() => navigate("/allMovies")}
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go Back to All Movies
        </button>
      </div>
    );
  }

  const { _id, moviePoster, movieTitle, types, rating, Bio } = movie;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-portal-server-rouge.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Movie deleted successfully!",
                icon: "success",
                timer: 2000,
              });
              navigate("/allMovies");
            } else {
              Swal.fire({
                title: "Failed!",
                text: "Failed to delete the movie. Please try again.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting movie:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the movie.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleAddToFavorites = async (movie) => {
    if (!user || !user.email) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You must be logged in to add to favorites.",
        timer: 3000,
      });
      return;
    }
  
    const favoriteMovie = {
      movieTitle: movie.movieTitle,
      moviePoster: movie.moviePoster,
      types: movie.types,
      rating: movie.rating,
      user_email: user.email,
    };
  
    try {
      const response = await fetch("https://movie-portal-server-rouge.vercel.app/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favoriteMovie),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Added to Favorites!",
          text: `${movie.movieTitle} has been added to your favorites.`,
          timer: 3000,
        });
      } else {
        throw new Error("Failed to add movie to Favorites.");
      }
    } catch (error) {
      console.error("Error adding to Favorites:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message,
        timer: 3000,
      });
    }
  };




  return (
    <div className="movie-details w-4/5 mx-auto my-10 ml-80">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-black ml-20">{movieTitle}</h1>
      </div>
      <div className="flex gap-10 mt-5">
        <img
          src={moviePoster}
          alt={movieTitle}
          className="w-1/3 h-auto rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <p className="text-md text-gray-700">Genres: {types}</p>
          <p className="text-lg">Rating: {rating}/5</p>
          <p className="text-md text-black">
            Description: <br /> {Bio}
          </p>
          <button
            className="btn btnf px-4 py-2 bg-[#cce94e] text-black rounded-full"
            onClick={() => handleAddToFavorites(movie)}
          >
            Add to Favorites
          </button>

          <div className="flex gap-4">
            <button
              className="btn btnu px-4 py-2 bg-green-500 rounded-full text-black"
              onClick={() => navigate(`/movie/update/${_id}`)}
            >
              Update Movie
            </button>


            <button
              className="btn btnd px-4 py-2 bg-[#ad1717] text-white rounded-full"
              onClick={handleDelete}
            >
              Delete Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;





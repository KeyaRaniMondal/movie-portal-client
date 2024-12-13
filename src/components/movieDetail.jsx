import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();

  if (!movie) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">Movie Not Found</h1>
        <button
          onClick={() => navigate('/allMovies')}
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go Back to All Movies
        </button>
      </div>
    );
  }

  const { _id, moviePoster, movieTitle, types, rating, Bio } = movie;


  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this movie?');
    if (!confirmDelete) return;

    fetch(`https://movie-portal-server-rouge.vercel.app/movies/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('Movie deleted successfully!');
          navigate('/allMovies');
        } else {
          alert('Failed to delete the movie. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error deleting movie:', error);
        alert('An error occurred while deleting the movie.');
      });
  };

  const handleAddToFavorites = async (movie) => {
    try {

      const response = await fetch("https://movie-portal-server-rouge.vercel.app/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add to Favorites.");
      }
  
      const data = await response.json();
  
      if (data.insertedId) {
        alert("Movie added to Favorites!");
      } else {
        alert("An error occurred while adding to Favorites. Please try again.");
      }
    } catch (error) {
      console.error("Error adding to Favorites:", error);
      alert(error.message);
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
  className="btn px-4 py-2 bg-[#cce94e] text-black rounded-full"
  onClick={() => handleAddToFavorites(movie)} 
>
  Add to Favorites
</button>

          <div className="flex gap-4">
            <button
              className="btn px-4 py-2 bg-green-500 text-white rounded-full"
              onClick={() => navigate(`/movie/update/${_id}`)}
            >
              Update Movie
            </button>


            <button
              className="btn btn-danger px-4 py-2 bg-[#ad1717] text-white rounded-full"
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





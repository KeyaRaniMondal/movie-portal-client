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

  const { moviePoster, movieTitle, types, rating, Bio } = movie;
  console.log(movie)

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
          <p className="text-md text-black">Description: <br /> {Bio}</p>
          <button
              className="btn px-4 py-2 bg-[#cce94e] text-black rounded-full"
            >
              Add to Favorites
            </button>
          <div className="flex gap-4">
          <button
              className="btn px-4 py-2 bg-[#9de45b] text-black rounded-full"
            >
              update movie
            </button>
            <button
              className="btn btn-danger px-4 py-2 bg-[#ad1717] text-white rounded-full"
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





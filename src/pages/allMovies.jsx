import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const movies = useLoaderData();
  const [searchQuery, setSearchQuery] = useState(""); 

  const filteredMovies = movies.filter((movie) =>
    movie.movieTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-max pb-4 mt-10 mx-32">
      <h1 className="text-4xl font-bold text-center pb-14">All Featured Movies</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search movies by title..."
          className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-10 text-white mx-20 w-full">
        {filteredMovies.map((movie) => (
          <div
            key={movie._id}
            className="h-80 flex flex-col justify-between p-14"
            style={{
              backgroundImage: `url(${movie.moviePoster})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <h1 className="text-xl font-bold">{movie.movieTitle}</h1>
              <p className="text-sm">{movie.types}</p>
              <p className="text-sm">Rating: {movie.rating}/5</p>
            </div>
            <Link to={`/movie/${movie._id}`}>
              <button className="btn btn1 mt-2">See Details</button>
            </Link>
          </div>
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <p className="text-center text-lg text-gray-500">No movies found.</p>
      )}
    </div>
  );
};

export default AllMovies;




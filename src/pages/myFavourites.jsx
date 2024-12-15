import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/authProviders";

const MyFavourite = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]); 

  useEffect(() => {
    if (user && user.email) {
      fetch(`https://movie-portal-server-rouge.vercel.app/favourites?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setFavorites(data))
        .catch((error) => console.error("Error fetching favorites:", error));
    }
  }, [user]);


  const handleRemoveFavorite = (id) => {
    if (window.confirm("Are you sure you want to remove this movie from favorites?")) {
      fetch(`https://movie-portal-server-rouge.vercel.app/favourites/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message || data.deletedCount > 0) {
            alert("Movie removed from favorites.");
            setFavorites(favorites.filter((movie) => movie._id !== id)); 
          } else {
            alert("Failed to remove the movie from favorites.");
          }
        })
        .catch((error) => console.error("Error removing favorite:", error));
    }
  };

  return (
    <div className="favorites-container">
      <h1 className="text-3xl font-bold text-center my-10">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-[#b8dad7]">No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <div key={movie._id} className="card bg-[#9eacca] p-4 rounded-lg shadow-md">
              <img
                src={movie.moviePoster}
                alt={movie.movieTitle}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold mt-4">{movie.movieTitle}</h2>
              <p>Genres: {movie.types}</p>
              <p>Rating: {movie.rating}/5</p>
              <button
                onClick={() => handleRemoveFavorite(movie._id)}
                className="mt-4 px-4 py-2 bg-[red] text-white rounded-full"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavourite;



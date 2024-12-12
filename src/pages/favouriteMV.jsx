import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom"; // Added for navigation

const FavouriteMV = () => {
//   const favoriteMovies = useLoaderData(); // Access favorite movies data

//   if (!favoriteMovies || favoriteMovies.length === 0) {
//     return (
//       <div className="favorite-movies w-4/5 mx-auto my-10">
//         <h2>You haven't added any favorites yet!</h2>
//         <p>Explore movies and click the "Add to Favorites" button to see them here.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="favorite-movies w-4/5 mx-auto my-10">
//       <h1>Your Favorite Movies</h1>
//       <ul className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {favoriteMovies.map((movie) => (
//           <li key={movie.id} className="movie-card">
//             <Link to={`/movie/${movie.id}`}>
//               <img src={movie.moviePoster} alt={movie.movieTitle} />
//             </Link>
//             <h2>{movie.movieTitle}</h2>
//             <p className="text-sm">{movie.types}</p>
//             <p className="text-sm">Rating: {movie.rating}/10</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
};

export default FavouriteMV;


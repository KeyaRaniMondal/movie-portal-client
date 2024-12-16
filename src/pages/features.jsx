import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Features = () => {
  const movies = useLoaderData(); 
  const sortedMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div className="w-max h-screen mt-10 mx-32">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 py-10 text-[#b4d832]">
{sortedMovies.length > 0 ? (
     sortedMovies.map((movie) => (
        <div
          key={movie.id}
          className="h-80 flex flex-col justify-between p-4"
          style={{
            backgroundImage: `url(${movie.moviePoster})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 p-2 rounded-md text-white">
            <h1 className="text-xl font-bold">{movie.movieTitle}</h1>
            <p className="text-sm">{movie.types}</p>
            <p className="text-sm">Rating: {movie.rating}/10</p>
          </div>

          <div>
            <p className="text-sm">{movie.Bio}</p>
          </div>
          <Link to={`/movie/${movie._id}`}>
              <button className="btn btn1 mt-2">See Details</button>
            </Link>
        </div>)
      )):(
        <p className="text-center text-gray-500">No movies available.</p>)}
    </div>
</div>
    
  );
};

export default Features;
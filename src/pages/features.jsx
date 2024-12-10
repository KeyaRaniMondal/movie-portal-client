import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Features = () => {
  const movies = useLoaderData(); 

  return (
    <div className="w-max h-screen mt-10 mx-32">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 py-10">

      {movies.map((movie) => (
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
          <div>
            <h1 className="text-xl font-bold">{movie.movieTitle}</h1>
            <p className="text-sm">{movie.types}</p>
            <p className="text-sm">Rating: {movie.rating}/10</p>
          </div>

          <div>
            <p className="text-sm">{movie.Bio}</p>
          </div>
          <Link to={`/movie/${movie.id}`}>
              <button className="btn btn1 mt-2">See Details</button>
            </Link>
        </div>
      ))}
    </div>
</div>
    
  );
};

export default Features;
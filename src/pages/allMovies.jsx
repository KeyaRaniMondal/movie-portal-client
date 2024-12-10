import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const movies = useLoaderData(); 

  return (
    <div className="w-max pb-4 mt-10 mx-32">
<h1 className="text-4xl font-bold text-center pb-14">All Featured Movies</h1>
<div className="grid grid-cols-3 gap-10 text-white mx-20 " >

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

export default AllMovies;


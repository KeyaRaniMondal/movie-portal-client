// import { Link } from "react-router-dom";

const AllMovies = ({ movies }) => {
//     const {
//         moviePoster,
//         movieTitle,
//         types,
//         rating,
//         Bio,
//     } = movies
  return (
//     <div className="grid grid-cols-4 gap-3 text-white mx-20 -mt-10">
        <div>
           {/* //</div>className="h-80 flex flex-col justify-between p-4"
           key={id}
           style={{
            backgroundImage: `url(${moviePoster})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h1 className="text-xl font-bold">{movieTitle}</h1>
            <ul className="mt-2">
              {Genre.map((genre, index) => (
                <li key={index} className="text-sm">
                  {genre}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm">Duration: {Duration} mins</p>
            <p className="text-sm">Release Year: {ReleaseYear}</p>
            <p className="text-sm">Rating: {rating}/10</p>

            {/* <Link to={`/movie/${id}`}>
              <button className="btn btn1 mt-2">See Details</button>
            </Link> */}
          </div>


//     </div>
  );
};

export default AllMovies;

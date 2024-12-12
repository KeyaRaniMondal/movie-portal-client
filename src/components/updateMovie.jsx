import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateMovie = () => {
  const movie = useLoaderData();
  const [rating, setRating] = useState(movie.rating || 0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!movie) {
      alert("Movie not found");
      navigate("/allMovies");
    }
  }, [movie, navigate]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const moviePoster = form.moviePoster.value;
    const movieTitle = form.movieTitle.value;
    const types = form.Types.value;
    const summary = form.Bio.value; // Renamed for consistency with "Summary"
    
    // Validation
    if (!moviePoster.startsWith("http")) {
      toast.error("Movie Poster must be a valid URL.");
      return;
    }
    if (!movieTitle || movieTitle.length < 2) {
      toast.error("Movie Title must be at least 2 characters long.");
      return;
    }
    if (rating === 0) {
      toast.error("Please provide a rating for the movie.");
      return;
    }
    if (!summary || summary.length < 10) {
      toast.error("Summary must be at least 10 characters long.");
      return;
    }

    const updatedMovie = {
      moviePoster,
      movieTitle,
      types,
      rating,
      summary,
    };

    fetch(`https://movie-portal-server-rouge.vercel.app/movies/${movie._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Movie updated successfully!");
          navigate("/allMovies");
        } else {
          toast.error("Failed to update movie!");
        }
      })
      .catch((error) => {
        console.error("Error updating movie:", error);
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <div className="flex justify-between m-10 bg-[#997f74]">
      <div className="justify-center ml-20">
        <h1 className="text-3xl pt-5 font-bold text-center">Update Movie</h1>
        <form onSubmit={handleSubmit}>
          <div className="font-bold mb-2">
            Movie Poster: <br />
            <input
              type="text"
              name="moviePoster"
              defaultValue={movie.moviePoster}
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </div>
          <div className="font-bold mb-2">
            Movie Title: <br />
            <input
              type="text"
              name="movieTitle"
              defaultValue={movie.movieTitle}
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </div>
          <div className="font-bold mb-2">
            Genre: <br />
            <select
              name="Types"
              defaultValue={movie.types}
              className="px-3 py-1 rounded-md"
            >
              <option value="ai">AI</option>
              <option value="comedy">Comedy</option>
              <option value="thriller">Thriller</option>
              <option value="horror">Horror</option>
            </select>
          </div>
          <div className="font-bold mb-2">
            Ratings: <br />
            <Rating
              onClick={handleRating}
              size={30}
              initialValue={rating}
              className="rating inline-flex"
            />
            <p>You rated: {rating}</p>
          </div>
          <div className="font-bold mb-2">
            Summary: <br />
            <textarea
              className="textarea textarea-warning"
              name="Bio"
              defaultValue={movie.Bio}
            ></textarea>
          </div>
          <button type="submit" className="btn btn1 my-5 text-white">
            Update Movie
          </button>
          <ToastContainer position="top-right" />
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;

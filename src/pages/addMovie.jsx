import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import addMovie from "../assets/addMv.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMovie = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const moviePoster = form.moviePoster.value;
    const movieTitle = form.movieTitle.value;
    const types = form.Types.value;
    const duration = form.movieTime.value; 
    const summary = form.Bio.value; 

    // Validations
    if (!moviePoster.startsWith("http")) {
      toast.error("Movie Poster must be a valid URL.");
      return;
    }
    if (!movieTitle || movieTitle.length < 2) {
      toast.error("Movie Title must be at least 2 characters long.");
      return;
    }
    if (!duration || duration < 60) {
      toast.error("Duration must be greater than 60 minutes.");
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

    const newMovies = {
      moviePoster,
      movieTitle,
      types,
      duration, 
      rating,
      summary, 
    };

    //console.log(newMovies);

    fetch("https://movie-portal-server-rouge.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovies),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully added!");
          form.reset(); 
          setRating(0); 
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add movie. Please try again.");
      });
  };

  return (
    <div className="flex justify-between m-10 bg-[#997f74]">
      <div className="justify-center ml-20">
        <h1 className="text-3xl pt-5 font-bold text-center">Add Movies</h1>
        <h1 className="text-md text-center mb-3">Fill the form to add Movies</h1>

        <form onSubmit={handleSubmit}>
          <div className="font-bold mb-2">
            Movie Poster: <br />
            <input
              type="text"
              name="moviePoster"
              placeholder="Movie Poster"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </div>
          <div className="font-bold mb-2">
            Movie Title: <br />
            <input
              type="text"
              name="movieTitle"
              placeholder="Movie Title"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </div>
          <div className="dropdown dropdown-hover font-bold mb-3">
            Genre: <br />
            <select name="Types" className="px-3 py-1 rounded-md">
              <option value="ai">AI</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="thriller">Thriller</option>
              <option value="horror">Horror</option>
            </select>
          </div>
          <div className="font-bold mb-2">
            Release Year: <br />
            <input
              type="date"
              name="movieDate"
              placeholder="Movie date"
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </div>
          <div className="font-bold mb-2">
            Duration: <br />
            <input
              type="number"
              name="movieTime"
              placeholder="Watching time in minutes"
              className="input input-bordered input-warning w-full max-w-xs"
            />
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
              placeholder="Movie Summary"
              name="Bio"
            ></textarea>
          </div>
          <button type="submit" className="btn btn1 my-5 text-white">
            Add Movie
          </button>
          <ToastContainer position="top-right" />
        </form>
      </div>
      <img src={addMovie} alt="" className="w-1/2" />
    </div>
  );
};

export default AddMovie;

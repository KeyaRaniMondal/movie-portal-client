import { useState } from "react"
import { Rating } from "react-simple-star-rating"
import addMovie from '../assets/addMv.jpg'

const AddMovie = () => {

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleForm=(e)=>{
        e.preventDefault()
        const form=e.target
        const moviePoster=form.moviePoster.value
        const movieTitle=form.movieTitle.value
        const types=form.Types.value
        const Bio=form.Bio.value

        const newMovies={moviePoster,
            movieTitle,
            types,
            rating,
            Bio,
        }
        console.log(newMovies)
    }

    return (
        <div style={
            {
               backgroundImage:`URL(${addMovie})`,
              width:'50%'
            }
        } className="">
            <h1 className="text-xl">Add Movies</h1>
            <h1 className="text-md">Fill the form to add Movies</h1>

            <form action="" onSubmit={handleForm}>
            <div>
                Movie Poster: <br />
                <input
                    type="text" name="moviePoster"
                    placeholder="Movie Poster"
                    className="input input-bordered input-warning w-full max-w-xs" />
            </div>
            <div>
                Movie Title: <br />
                <input
                    type="text" name="movieTitle"
                    placeholder="Movie Title"
                    className="input input-bordered input-warning w-full max-w-xs" />
            </div>
            <div className="dropdown dropdown-hover">
                Movie Types: <br />
                <select name="Types" id="">
                    <option value="ai">Ai</option>
                    <option value="comedy">Comedy</option>
                    <option value="thriller">Thriller</option>
                    <option value="horror">Horror</option>
                </select>
            </div>
            <div>
                Select Year: <br />
                <input
                    type="date" name="movieDate"
                    placeholder="Movie date"
                    className="input input-bordered input-warning w-full max-w-xs" />
            </div>
            <div>
                Ratings:<br />
                <Rating onClick={() => handleRating(5)} className="flex flex-row"></Rating>
            </div>
            <div>
                Summary: <br />
                <textarea className="textarea textarea-warning" placeholder="Bio" name="Bio"></textarea>
            </div>
            <button type="submit">Add Movie</button>
            </form>
            
        </div>

    )
}
export default AddMovie
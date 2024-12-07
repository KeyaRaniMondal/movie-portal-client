import { useState } from "react"
import {Rating} from "react-simple-star-rating";
import addMovie from '../assets/addMv.jpg'

const AddMovie = () => {

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const moviePoster=form.moviePoster.value
        const movieTitle=form.movieTitle.value
        const types=form.Types.value
        const Bio=form.Bio.value

        const newMovies={
            moviePoster,
            movieTitle,
            types,
            rating,
            Bio,
        }
        console.log(newMovies)

        fetch('http://localhost:5000/movies',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newMovies)
        }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    }

    return (
        
        <div className="flex justify-between m-10 bg-[#997f74]">
        
            <div className="justify-center ml-20">
            <h1 className="text-3xl pt-5 font-bold text-center">Add Movies</h1>
            <h1 className="text-md text-center mb-3">Fill the form to add Movies</h1>

            <form action="" onSubmit={handleSubmit}>
            <div className="font-bold mb-2">
                Movie Poster: <br />
                <input
                    type="text" name="moviePoster"
                    placeholder="Movie Poster"
                    className="input input-bordered input-warning w-full max-w-xs m" />
            </div>
            <div className="font-bold mb-2">
                Movie Title: <br />
                <input
                    type="text" name="movieTitle"
                    placeholder="Movie Title"
                    className="input input-bordered input-warning w-full max-w-xs" />
            </div>
            <div className="dropdown dropdown-hover font-bold mb-3 ">
                Movie Types: <br />
                <select name="Types" id=""  className="px-3 py-1 rounded-md">
                    <option value="ai">Ai</option>
                    <option value="comedy">Comedy</option>
                    <option value="thriller">Thriller</option>
                    <option value="horror">Horror</option>
                </select>
            </div>
            <div className="font-bold mb-2">
                Select Year: <br />
                <input
                    type="date" name="movieDate"
                    placeholder="Movie date"
                    className="input input-bordered input-warning w-full max-w-xs" />
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
                <textarea className="textarea textarea-warning" placeholder="Bio" name="Bio"></textarea>
            </div>
            <button type="submit" className="btn bg-[#d45920] my-5 text-white">Add Movie</button>
            </form>
            
            </div>
            <img src={addMovie} alt="" className="w-1/2"/>
        </div>

    )
}
export default AddMovie
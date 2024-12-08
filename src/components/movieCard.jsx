import { useEffect, useState } from "react"

const MovieCard = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const movie = () => {
            fetch('./movie.json')
                .then(res => res.json())
                .then(data => setMovies(data))
        }
        movie()
    }, [])
    return (
        <div className="grid grid-cols-4 gap-3 ">
            {movies.map((movie) => (
                <div className="bg-black h-64 w-48">
                    <img src={movies.MoviePoster} alt="movie poster" />
                    <h1>{movie.MovieTitle}</h1>
                    <ul>
                        {
                            movie.Genre.map((mv, index) => (
                                <li key={index}>{mv}</li>
                            ))
                        }
                    </ul>
                    <p>{movie.Duration}</p>
                    <p>{movie.ReleaseYear}</p>
                    <p>{movie.Rating}</p>
                    <button className="btn btn1">See Details</button>
                </div>
            ))}
            <button className="btn btn1">See All Movies</button>
        </div>
    )
}
export default MovieCard
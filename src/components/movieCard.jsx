import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
        <div className="grid grid-cols-4 gap-3 text-white mx-20 -mt-10">
            {movies.map((movie,id) => (
                <div className="h-80" key={id} style={{
                    backgroundImage:`url(${movie.MoviePoster})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}>
                    
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
                    
                    <Link to={`/movie/${movie.id}`}>
                    <button className="btn btn1">See Details</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default MovieCard
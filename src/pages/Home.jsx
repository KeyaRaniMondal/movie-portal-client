
import Banner from "../components/banner";
import MovieCard from "../components/movieCard";
import { useLoaderData } from "react-router-dom";
import AllMovies from "./allMovies";

const Home=()=>{

    const movies=useLoaderData()
    return(
        <div className="w-screen bg-[#b8b2b2]">
            <Banner></Banner>
            <MovieCard></MovieCard>
            <button className="btn btn1">See All Movies</button>
{/* <AllMovies movies={movies} /> */}

        </div>
    )
}
export default Home;
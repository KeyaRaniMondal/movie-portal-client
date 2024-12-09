import { Outlet } from "react-router-dom";
import Banner from "../components/banner";
import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";


const Home=()=>{

    return(
        <div className="w-screen bg-[#b8b2b2]">
            <Banner></Banner>
            <MovieCard></MovieCard>
            <button className="btn btn1">See All Movies</button>
        </div>
    )
}
export default Home;
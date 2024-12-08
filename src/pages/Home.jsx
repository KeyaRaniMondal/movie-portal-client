import { Outlet } from "react-router-dom";
import Banner from "../components/banner";
import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";


const Home=()=>{

    return(
        <div className="w-screen">
            <Banner></Banner>
            <MovieCard></MovieCard>
        </div>
    )
}
export default Home;
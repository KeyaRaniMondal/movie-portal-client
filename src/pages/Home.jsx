import Banner from "../components/banner";
import { NavLink, useLoaderData } from "react-router-dom";
import Features from "./features";

const Home = () => {
  const movies = useLoaderData();

  return (
    <div className="w-full bg-[#b8b2b2] flex flex-col items-center pb-10">
      <Banner />
      <Features movies={movies} />
      <NavLink to={'/allMovies'}>
        <button className="btn btn1 w-40 mt-6">See All Movies</button>
      </NavLink>
    </div>
  );
};

export default Home;

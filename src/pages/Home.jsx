import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import { NavLink, useLoaderData } from "react-router-dom";
import Features from "./features";

const Home = () => {
  const movies = useLoaderData();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });


  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <div className={`w-full flex flex-col items-center pb-10 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <header className="w-full flex justify-between items-center px-8 py-4">
        <h1></h1>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full ${
            theme === "dark" ? "bg-gray-700 text-white" : "bg-[#240f0f] text-white"
          }`}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <Banner />
      <Features movies={movies} />
      <NavLink to={"/allMovies"}>
        <button className="btn btn1 w-40 mt-6">See All Movies</button>
      </NavLink>
    </div>
  );
};

export default Home;


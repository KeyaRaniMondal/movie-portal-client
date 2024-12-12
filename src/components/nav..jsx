import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/authProviders";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to="/" className="block lg:inline-block px-3 py-2 hover:text-gray-300">
        Home
      </NavLink>
      <NavLink to="/allMovies" className="block lg:inline-block px-3 py-2 hover:text-gray-300">
        All Movies
      </NavLink>
      {user ? (
        <>
          <NavLink to="/addMovie" className="block lg:inline-block px-3 py-2 hover:text-gray-300">
            Add Movies
          </NavLink>
          <NavLink to="/favourite" className="block lg:inline-block px-3 py-2 hover:text-gray-300">
            My Favourites
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login" className="block lg:inline-block px-3 py-2 hover:text-gray-300">
            Login
          </NavLink>
          <NavLink to="/register" className="block lg:inline-block px-3 py-2 hover:text-gray-300">
            Register
          </NavLink>
        </>
      )}
    </>
  );

  // For Lottie animation
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch("/Animation - 1733458267335.json");
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    fetchAnimation();
  }, []);

  return (
    <nav className="navbar bg-gradient-to-r from-black via-[#795f5b] to-gray-500 px-5 lg:px-20 py-3">
      <div className="flex justify-between items-center w-full">
        {/* Left Side: Logo and Animation */}
        <div className="flex items-center gap-3">
          {animationData ? (
            <Lottie animationData={animationData} loop={true} className="h-12 hidden md:block" />
          ) : (
            <p className="text-white hidden md:block">Loading animation...</p>
          )}
          <a className="text-xl text-[#b4acda] font-bold">Movie-Mania</a>
        </div>

        {/* Right Side: Links and User Dropdown */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="space-x-5 text-white font-bold">{links}</div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={user.displayName || "User Avatar"}
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    className="rounded-full"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user.displayName || "Profile"}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li onClick={logOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <img
              alt="User Avatar"
              src="https://via.placeholder.com/40"
              className="rounded-full"
            />
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {links}
              {user && (
                <li onClick={logOut}>
                  <a className="text-black">Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;



// http://localhost:5000/
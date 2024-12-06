import { NavLink } from "react-router-dom"
import Lottie from "lottie-react";
import { useEffect, useState } from "react";


const Nav = () => {
  const links = (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/allMovies'>All Movies</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>

    </>
  )

  //for lootie animation
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
    <div className="navbar bg-gradient-to-r from-black via-purple-600 to-pink-500 px-10 ">
      <div className="flex-1">
      {animationData ? (
        <div className="animation-container">
          <Lottie animationData={animationData} loop={true} className=" h-20 "/>
        </div>
      ) : (
        <p className="text-white">Loading animation...</p>
      )}
        <a className="btn btn-ghost text-xl text-[#b4acda] -ml-5">Movie-Mania</a>
      </div>
      <div className="flex gap-10">
        <div className="space-x-5 mr-64 text-white font-bold text-md">
          {links}
        </div>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Nav
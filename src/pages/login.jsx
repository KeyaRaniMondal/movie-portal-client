import { Link, NavLink } from 'react-router-dom'
import login from '../assets/login.jpg'
import '../index.css'
const Login=()=>{
    return(
            <div style={
                {
                    backgroundImage:`URL(${login})`,
    
                }
            } className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center -mt-20">
          <h1 className="text-5xl font-bold">Login Now !!</h1>
    <p className="mt-4 text-black">Login for getting unlimited collection of movies...</p>
        </div>
        <div className="card bg-[#684747] w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">    
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
   
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn1">Login</button>
            </div>
            <p className="text-white">don't have an account ? <NavLink to={'/register'} className="text-[#c5942a]">Register</NavLink></p>
          </form>
        </div>
      </div>
    </div>
        )

}
export default Login
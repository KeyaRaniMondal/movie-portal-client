import { Link, NavLink } from 'react-router-dom'
import register from '../assets/register.jpg'
import '../index.css'
const Register=()=>{
    return(
        <div style={
            {
                backgroundImage:`URL(${register})`,

            }
        } className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white">Register First !!</h1>
<p className="mt-4 text-white">You need to register first for getting unlimited collection of movies...</p>
    </div>
    <div className="card bg-[#2b0a0a] w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="enter your name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo URL</span>
          </label>
          <input type="text" placeholder="enter photo URL" className="input input-bordered" required />
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
          <button className="btn btn1">Register</button>
        </div>
        <p className="text-white">Already have an account ? <NavLink to={'/login'} className="text-[#c5942a]">Login</NavLink></p>
      </form>
    </div>
  </div>
</div>
    )
}
export default Register
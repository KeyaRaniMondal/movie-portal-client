import { useContext } from "react";
import { AuthContext } from "../providers/authProviders";
import { Link, NavLink, useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate=useNavigate() 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await loginUser(email, password); 
      alert("Login successful!");
      console.log("Logged in user:", result.user);
      navigate("/")
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${login})`,
      }}
      className="hero bg-base-200 min-h-screen"
    >
      <div className="hero-content flex-col">
        <div className="text-center -mt-20">
          <h1 className="text-5xl font-bold">Login Now !!</h1>
          <p className="mt-4 text-black">
            Login for getting unlimited collection of movies...
          </p>
        </div>
        <div className="card bg-[#684747] w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn1">Login</button>
            </div>
            <p className="text-white">
              Don't have an account?{" "}
              <NavLink to={"/register"} className="text-[#c5942a]">
                Register
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

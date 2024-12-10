import { useContext } from "react";
import { AuthContext } from '../providers/authProviders'
import register from '../assets/register.jpg'
import { NavLink } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    const newUser={name,email,photoURL}
    console.log(newUser)

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password, name, photoURL)
      .then((result) => {
        alert("User registered successfully!");
        console.log(result.user)

        fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${register})`,
      }}
      className="hero bg-base-200 min-h-screen"
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Register First !!</h1>
          <p className="mt-4 text-white">
            You need to register first to get unlimited movies...
          </p>
        </div>
        <div className="card bg-[#2b0a0a] w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn1">Register</button>
            </div>
            <p className="text-white">
              Already have an account?{" "}
              <NavLink to={"/login"} className="text-[#c5942a]">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

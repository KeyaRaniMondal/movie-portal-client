import { NavLink } from "react-router-dom"

const Error=()=>{
    return(
        <div className="my-10">
            <h1 className="text-5xl py-10 font-bold text-[red]">ERROR 404</h1>
            <p className="text-3xl pb-10 text-[#1d681d] font-bold">page not found</p>
<NavLink to={'/'}><button className="btn btn-info">Go back to Homepage</button></NavLink>
        </div>
    )
}
export default Error
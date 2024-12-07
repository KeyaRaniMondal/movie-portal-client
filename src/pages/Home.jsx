import { Outlet } from "react-router-dom";
import Banner from "../components/banner";
import Nav from "../components/nav.";

const Home=()=>{
    return(
        <div className="w-screen">
            <Banner></Banner>
        </div>
    )
}
export default Home;
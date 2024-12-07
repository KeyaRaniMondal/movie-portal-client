import { Outlet } from "react-router-dom"
import Nav from "./components/nav."
import Footer from "./components/footer"

const MainLayout=()=>{
    return(
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default MainLayout
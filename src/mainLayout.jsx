import { Outlet } from "react-router-dom";
import Nav from "./components/nav.";
import Footer from "./components/footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

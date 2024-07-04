import { Outlet } from "react-router-dom";
import Navbar from "../../Container/Shared/Navbar/Navbar";
import Footer from "../../Container/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;
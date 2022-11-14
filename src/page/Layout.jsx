import { Outlet } from "react-router";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

const Layout = () => {
    return (  
        <div>
            {/* navbar 공간 */}
            <NavbarComp />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
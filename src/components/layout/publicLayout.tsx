import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";
export default function PublicLayout() {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
}



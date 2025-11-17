import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";


export default function Layout() {

    return (
        // <div className="w-screen flex flex-col items-center bg-black">
        <div className="w-screen flex flex-col items-center bg-gray-300">
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    )
}
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

const Mainlayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Mainlayouts
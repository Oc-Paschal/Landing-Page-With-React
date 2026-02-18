import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <nav className="flex justify-between fixed w-full items-center p-4 bg-gray-100">
          <h1 className="text-xl font-bold">Oc_Paschal</h1>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
            <i className="fa-solid fa-bars"></i>
          </button>
          {isOpen && (
            <ul className="md:hidden flex flex-col w-full text-center p-9 mt-70 gap-4  bg-white p-4 shadow  fixed">
              <Link to={"/"}>Home</Link>
              <Link to={"/Features"}>Features</Link>
              <Link to={"/About"}>About</Link>
              <Link to={"/Contact"}>Contact</Link>
            </ul>
          )}
          <div className=" hidden md:flex gap-6">
            <Link to={"/"} className="hover:text-blue-600 font-semibold ">
              Home
            </Link>
            <Link to={"/Features"} className="hover:text-blue-600  font-semibold">
              Features
            </Link>
            <Link to={"/About"} className="hover:text-blue-600   font-semibold">
              About
            </Link>
            <Link to={"/Contact"} className="hover:text-blue-600  font-semibold">
              Contact
            </Link>
            <button className="bg-blue-600   cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

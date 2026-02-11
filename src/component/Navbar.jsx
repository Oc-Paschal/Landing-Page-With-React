import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className="text-xl font-bold">Oc_Paschal</h1>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600 font-semibold ">
            Home
          </a>
          <a href="#" className="hover:text-blue-600  font-semibold">
            Features
          </a>
          <a href="#" className="hover:text-blue-600   font-semibold">
            About
          </a>
          <a href="#" className="hover:text-blue-600  font-semibold">
            Contact
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

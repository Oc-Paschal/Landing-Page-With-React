import React from "react";
import pinInterestImage from '../Images/Pininterest.jpg';

const Herosection = () => {
  return (
    <section className="   flex flex-col md:flex-row items-center justify-between px-12 py-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Welcome to my Landing Page
        </h1>

        <p className="text-2xl font-semibold">Build Something Amazing With Us</p>
        <p className=" flex flex-wrap p-2 font-medium"> We create modern, responsive websites that help your business 
         grow online and reach more customers. </p>
         <button className=" flex bg-blue-600 text-white  cursor-pointer  px-4 py-2 m-6  rounded-lg hover:bg-blue-700 p-6  cursor-pointer" > Get Started</button>
      </div>
      
      <div>

        <img src={pinInterestImage} alt="pininterest image" className="h-90  w-130  rounded-4xl"  />
      </div>



    </section>
  )
};

export default Herosection;

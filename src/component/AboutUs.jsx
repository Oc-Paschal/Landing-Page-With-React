import React from "react";
import download from '../Images/download (1).jpg'

const AboutUs = () => {
  return (
    <section className="bg-neutral-50">
      <div>
        <h1 className="text-center font-bold text-3xl p-2"> About Us </h1>

        <div className=" flex items-center gap-3 justify-center">
          <hr className=" border-gray-400  w-10" />
          <p className="font-medium"> Who We Are</p>
          <hr className=" border-gray-400 w-10" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-row gap-12 p-5 justify-center w-full">
        <div className="flex p-4 h-80 ">
          <img src={download} alt="Aboutus image" className="rounded-2xl border-5 border-gray-300" />
        </div>

        <div className=" flex   items-center justify-center">
          <p>
            We are a passionate web development team dedicated to helping <br/>
            businesses establish a strong online presence. Our mission is to<br/>
            build modern, responsive, and user-friendly websites that not only<br/>
            look great but also drive real results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

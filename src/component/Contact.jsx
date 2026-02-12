import React from "react";

const Contact = () => {
  return (
    <section>
      <div>
        <h1 className="text-center font-bold text-3xl p-2"> Get In Touch </h1>

        <div className=" flex items-center gap-3 justify-center">
          <hr className=" border-gray-400  w-10" />
          <p className="font-medium"> Contact Us</p>
          <hr className=" border-gray-400 w-10" />
        </div>
      </div>

      <div className="flex  gap-30 p-8 justify-center w-full ">
        <div className="flex gap-3">
          <i className="fa-solid fa-envelope text-3xl text-black"></i>
          <div>
            <h3> Email Us</h3>
            <p>info@mybrand.com</p>
          </div>
        </div>
        <div className="flex gap-3">
             <div className="w-px h-11 bg-gray-200"></div>
          <i className="fa-solid fa-phone text-3xl text-black"></i>
          <div>
            <h3> Call Us</h3>
            <p>07012345678</p>
          </div>
        </div>
       

        <div className="flex gap-3">
             <div className="w-px h-11 bg-gray-200"></div>
          <i className="fa-solid fa-location-dot text-3xl text-black"></i>
          <div>
            <h3>Visit Us</h3>
            <p>123 Web Avenue,<br/>Lagos, Nigeria</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;

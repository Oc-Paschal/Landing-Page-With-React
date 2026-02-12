import React from "react";

const Message = () => {
  return (
    <section className="flex items-center justify-center">
      <div>
      <div className="flex flex-col gap-3">
        <textarea
          type="text"
          placeholder="Your Name"
          className=" p-1   border rounded-lg h-12 w-90"
        />
        <textarea
          type="email"
          placeholder="Your Email"
          className=" border   p-1  h-12 rounded-lg w-90"
        />
        <textarea
          type="text"
          placeholder="Your Message"
          className="border p-1  w-90 h-25 rounded-lg w-90  "
        />
       
      </div> 
      <div className="flex items-center justify-center m-5 ">
       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
          Send Message
        </button>
        </div>
        </div>
    </section>
  );
};

export default Message;

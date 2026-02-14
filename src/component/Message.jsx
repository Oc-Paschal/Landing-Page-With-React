import { useState } from "react";

const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <textarea
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className=" p-1   border rounded-lg h-12 w-90"
          />
          <textarea
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className=" border   p-1  h-12 rounded-lg w-90"
          />
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border p-1  w-90 h-25 rounded-lg w-90  "
          />
        </div>
        <div className="flex items-center justify-center m-5 ">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Message;

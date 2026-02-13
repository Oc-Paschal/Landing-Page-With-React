import React from "react";

const Features = () => {
  return (
    <section>
      <div>
        <h1 className="text-center font-bold text-3xl p-2"> Our Features </h1>

        <div className=" flex items-center gap-3 justify-center">
          <hr className=" border-gray-400  w-10" />
          <p className="font-medium"> What We Offer</p>
          <hr className=" border-gray-400 w-10" />
        </div>
      </div>

      <div className="py-8 px-6">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="p-6 shadow-lg rounded-2xl bg-neutral-100">
            <h3 className="text-xl font-bold mb-2 text-center">
              Website Development
            </h3>
            <p>
              We build responsive, fast, and modern websites tailored to your
              business goals. From landing pages to full business platforms, our
              focus is on creating websites that not only look good but also
              perform well across all devices, helping you attract and convert
              more customers online.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-2xl bg-neutral-100 ">
            <h3 className="text-xl font-bold mb-2 text-center">UI/UX Design</h3>
            <p>
              We design clean, user-friendly interfaces that give your customers
              the best digital experience. Every layout, color, and interaction
              is carefully crafted to make your website easy to navigate,
              visually appealing, and optimized to keep visitors engaged longer.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-2xl bg-neutral-100">
            <h3 className="text-xl font-bold mb-2 text-center">
              Website Maintenance
            </h3>
            <p>
              We provide ongoing support to keep your website updated, secure,
              and running smoothly. From fixing bugs to updating content and
              improving performance, we ensure your website stays reliable so
              you can focus on growing your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

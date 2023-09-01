import React from "react";
import watch_img from "../assets/ecom-images/products/recent-products-03/product-01.jpg";

const Watch = () => {
  return (
    <div className="mt-20">
      <div className="grid lg:grid-cols-12 ">
        <div className="lg:col-span-6 sm:col-span-12 sm:mx-auto sm:mt-6">
          <img src={watch_img} alt="" />
        </div>
        <div className="lg:col-span-6 sm:col-span-12  w-1/2 mx-auto mt-16">
          <h1 className="text-2xl font-bold text-blue-600">Start From $49</h1>
          <h1 className="text-3xl font-bold mt-4 ">
            New Summer Collections For Man's Fashion.
          </h1>
          <h1 className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
            molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla
            tincidunt,
          </h1>
          <button
            type="btn"
            className="w-24 md:w-32 rounded mt-5 md:mt-4 p-2 md:p-3 bg-blue-600 text-white"
          >
            View All Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;

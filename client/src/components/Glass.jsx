import React from "react";
import glass_img from "../assets/ecom-images/products/recent-products-03/product-02.jpg";

const Glass = () => {
  return (
    <div className="mt-20">
      <div className="grid lg:grid-cols-12 ">
        <div className="lg:col-span-6 sm:col-span-12  w-1/2 mx-auto mt-16">
          <h1 className="text-2xl font-bold text-blue-600">Start From $50</h1>
          <h1 className="text-3xl font-bold mt-4 ">
            New Arrival From Creative Clock Collections
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
        <div className="lg:col-span-6 sm:col-span-12 sm:mx-auto sm:mt-6">
          <img src={glass_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Glass;

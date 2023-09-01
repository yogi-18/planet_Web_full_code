import React from "react";

const Secondfooter = () => {
  return (
    <div className="pt-20 ">
      <div className="grid lg:grid-cols-12 text-center border">
        <div className="col-span-4 p-9 border pt-16">
          <div className="mx-auto border mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-card">
            <i class="bi bi-bus-front text-2xl text-blue-600"></i>
          </div>
          <h1 className="font-semibold text-2xl mb-4 ">Free delivery</h1>
          <p className="text-lg text-gray-500 ">
            Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
          </p>
        </div>
        <div className="col-span-4 p-9 border pt-16">
          <div className="mx-auto border mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-card">
            <i class="bi bi-wallet2 text-2xl text-blue-600"></i>
          </div>
          <h1 className="font-semibold text-2xl mb-4 ">Online Payment</h1>
          <p className="text-lg text-gray-500 ">
            Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
          </p>
        </div>
        <div className="col-span-4 border p-9 pt-16">
          <div className="mx-auto border mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-card">
            <i class="bi bi-arrow-repeat text-2xl text-blue-600"></i>
          </div>
          <h1 className="font-semibold text-2xl mb-4 ">Easy Return.</h1>
          <p className="text-lg text-gray-500 ">
            Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Secondfooter;

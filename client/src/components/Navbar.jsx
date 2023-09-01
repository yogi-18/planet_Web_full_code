import React from "react";

const Navbar = () => {
  return (
    <div className="border-b hidden md:block lg:block">
      <div className="flex justify-between mx-14 mt-2  py-3">
        <div className="flex justify-between gap-5 text-gray-700 text-base">
          <p>About Us</p>
          <p>Order Tracking</p>
          <p>Contact Us</p>
          <p>fAQ's</p>
        </div>
        <div className=" text-gray-700 text-base hidden  md:block lg:block ">
          <select name="lan" id="lan">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
          </select>
          <select name="price" id="price">
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="ERU">ERU</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/ecom-images/footers/footer-04/payment.svg";
import planetlogo from "../assets/images/logo/logo.svg";

const Footer = () => {
  return (
    <div className="pt-16  ">
      <div className="grid lg:grid-cols-12 mb-16 mx-6 ">
        <div className="lg:col-span-4  items-center pt-10   ">
          <div className="w-[300px]">
            <div className="mb-9">
              {" "}
              <img src={planetlogo} alt="logo" />
            </div>
            <div className="flex  gap-4 mb-4 items-center">
              <span>
                {" "}
                <i class="bi bi-house-door text-2xl text-blue-700"></i>
              </span>
              <p className="text-lg text-gray-500 ">
                Shop 009A, Level 4, Block A, Demo Park, Ottawa
              </p>
            </div>
            <div className="flex  gap-4 mb-4 items-center">
              <span>
                {" "}
                <i className="bi bi-phone text-2xl text-blue-700"></i>
              </span>
              <p className="text-lg text-gray-500 ">+1-613-555-0182</p>
            </div>
            <div className="flex  gap-4 items-center">
              <span>
                {" "}
                <i class="bi bi-envelope-open  text-2xl text-blue-700"></i>
              </span>
              <p className="text-lg text-gray-500 ">[email protected]</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 pt-10">
          <div className="mb-9">
            <h1 className="text-2xl font-semibold ">My Account</h1>
          </div>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="text-base font-medium hover:text-blue-600 text-gray-500 "
              >
                My Profile
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-base font-medium hover:text-blue-600 text-gray-500 "
              >
                My Order History
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-base font-medium hover:text-blue-600 text-gray-500 "
              >
                Order Tracking
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-base font-medium hover:text-blue-600 text-gray-500 "
              >
                Shopping Cart
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 pt-10">
          <div className="mb-9">
            <h1 className="text-2xl font-semibold ">Shop Departments</h1>
          </div>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="text-base font-medium hover:text-blue-600 text-gray-500 "
              >
                Computers & Accessories
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-base font-medium hover:text-blue-600 text-gray-500 "
              >
                Smartphones & Tablets
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-base font-medium hover:text-blue-600 text-gray-500 "
              >
                TV, Video & Audio{" "}
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-base font-medium hover:text-blue-600 text-gray-500 "
              >
                Cameras, Photo & Video
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 pt-10">
          <div className="mb-9">
            <h1 className="text-2xl font-semibold ">Download App</h1>
          </div>
          <div className="w-full bg-blue-700 text-center text-white mb-4  py-3">
            <div className="text-center flex  gap-4 justify-center ">
              <i className="bi bi-apple text-4xl"></i>
              <div>
                <p className="text-sm font-medium"> Download from </p>
                <p className="text-sm font-medium">Apple App Store</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-black text-center text-white  py-3">
            <div className="text-center flex  gap-4 justify-center ">
              <i className="bi bi-google-play text-4xl"></i>
              <div>
                <p className="text-sm font-medium"> Get It On </p>
                <p className="text-sm font-medium">Google Play Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

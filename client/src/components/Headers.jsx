import React from "react";
import Img1 from "../assets/ecom-images/headers/header-04/image-01.jpg";
import Img2 from "../assets/ecom-images/headers/header-04/image-02.jpg";
import Img3 from "../assets/ecom-images/headers/header-04/image-03.jpg";

const Headers = () => {
  return (
    <>
      <div className="mx-6 ">
        <div className="grid grid-cols-12  gap-6 mt-8 ">
          <div className="col-span-12 py-3 lg:col-span-8 h-[33rem]  overflow-hidden  relative ">
            <img className="absolute h-[31rem] w-full" src={Img1} alt="" />
            <div className=" absolute mt-24 mx-6 md:mx-8 lg:mx-14">
              <p className=" lg:w-[50%] text-4xl font-bold">
                Mega Sale Up To 50% Off For All
              </p>
              <p className="text-lg text-gray-500 my-8 md:w-[80%] lg:w-[60%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ornare vestibulum mollis. Nam vitae augue purus.
                Integer ac accumsan nunc.
              </p>
              <button
                type="btn"
                className="w-24 md:w-32 rounded mt-3 md:mt-4 p-2 md:p-3 bg-blue-600 text-white"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="col-span-12 w-full block md:flex lg:block gap-8 lg:col-span-4  ">
            <div className="h-[15rem] relative w-[100%] my-4">
              <img className="h-[15rem] w-full absolute" src={Img2} alt="" />
              <div className="absolute right-0 bottom-16 me-5 text-end">
                <p className="text-3xl font-bold"> Summer Travel </p>
                <p className="text-3xl font-bold">Collection</p>
                <p className="text-xl pt-3"> Discover Now</p>
              </div>
            </div>

            <div className="h-[15rem] relative w-[100%] my-4">
              <img className="h-[15rem] w-full absolute" src={Img3} alt="" />
              <div className="absolute right-0 bottom-16 me-5 text-end">
                <p className="text-3xl font-bold"> Get 30% Off </p>
                <p className="text-3xl font-bold"> On iPhone</p>
                <p className="text-xl pt-3">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;

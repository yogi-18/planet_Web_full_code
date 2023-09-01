import React, { useEffect, useState } from "react";
import Img1 from "../assets/ecom-images/products/product-carousel-02/image-02.jpg";
import Img2 from "../assets/ecom-images/products/product-carousel-02/image-03.jpg";
import Img3 from "../assets/ecom-images/products/product-carousel-02/image-04.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  getProducts,
  addToCart,
} from "../redux/Actions/ProductAction";
import { toast } from "react-toastify";

const Addcart = () => {
  const dispatch = useDispatch();
  const { GetAllProducts } = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToFav = (item) => {
    console.log(item);
    dispatch(addToFavourites(item));
    toast.success("Product Added To Favourotes...");
  };
  const addToCartFunc = (item) => {
    console.log(item);
    dispatch(addToCart(item));
    toast.success("Product Added To Cart...");
  };

  // const arr = [
  //   {
  //     bagde: "- 50%",
  //     img: Img1,
  //     name: "Stylish Watch For Man",
  //     offer: "£85.00",
  //     offerDis: "£150.00",
  //   },
  //   {
  //     bagde: "- 20%",
  //     img: Img2,
  //     name: "Polo T-shirt For Man",
  //     offer: "£25.00",
  //   },
  //   {
  //     bagde: "- 55%",
  //     img: Img3,
  //     name: "Luxury Wallet For Male",
  //     offer: "£95.00",
  //   },
  //   {
  //     bagde: "- 20%",
  //     img: Img1,
  //     name: "Stylish Watch For Man",
  //     offer: "£85.00",
  //     offerDis: "£150.00",
  //   },
  // ];
  return (
    <div className="mx-8">
      <div className=" text-center flex-col flex items-center ">
        <div className="pt-28 lg:pb-5 text-5xl  font-bold">
          Let’s Check my Projects
        </div>
        <div className="  pb-10 md:pb-10 lg:pb-12 text-xl md:w-[60%] lg:w-[50%] text-gray-500 pt-2">
          <p>
            Donec dignissim, metus sit amet suscipit mauris vul putate odio,
            quis cursus nunc urna Aliqum tell us. Quisque hendrerit ..
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {GetAllProducts &&
          GetAllProducts.map((item) => (
            <div className="col-span-12 text-center relative sm:col-span-6 flex justify-center md:col-span-4 lg:col-span-3 gap-5">
              <div className="bg-slate-100 shadow-xl rounded-lg">
                <img src={item.img} alt="" className="" />
                <p className="py-1 absolute top-0 m-3 text-white font-bold rounded px-3 bg-blue-600">
                  {item.bagde}
                </p>
                <p className="text-xl mt-6 font-bold">{item.name}</p>
                <span className="text-xl font-bold">{item.offer}</span>
                <span className="text-xl mx-2 text-gray-500 line-through">
                  £150.00{" "}
                </span>
                <div className="text-orange-400 my-5 text-xl">
                  <i className="bi mx-1  bi-star-fill"></i>
                  <i className="bi mx-1  bi-star-fill"></i>
                  <i className="bi mx-1  bi-star-fill"></i>
                  <i className="bi mx-1  bi-star-fill"></i>
                  <i className="bi mx-1  bi-star-fill"></i>
                </div>
                <button
                  onClick={(e) => addToCartFunc(item)}
                  className="py-2 px-3 mr-5 bg-blue-600 text-xl mb-6 text-white rounded-lg"
                >
                  Add to Card
                </button>
                <button
                  onClick={(e) => addToFav(item)}
                  className="py-2 px-3 bg-blue-600 text-xl mb-6 text-white rounded-lg"
                >
                  Add To Favourite
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-4 gap-4">
        <button type="btn" className="hover:cursor-pointer">
          <i class=" hidden md:block lg:block bi bi-arrow-left-circle bg-slate-200 rounded-full px-3 py-2 mx-auto   text-2xl"></i>
        </button>
        <button type="btn" className="hover:cursor-pointer">
          <i class=" hidden md:block lg:block bi bi-arrow-right-circle bg-slate-200 rounded-full px-3 py-2 mx-auto   text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Addcart;

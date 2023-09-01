import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts } from "../redux/Actions/ProductAction";
import { toast } from "react-toastify";

const Shop = () => {
  const dispatch = useDispatch();
  const { GetAllProducts } = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCartFunc = (item) => {
    console.log(item);
    dispatch(addToCart(item));
    toast.success("Product Added To Cart...");
  };
  return (
    <>
      <div className="bg-slate-100 rounded-lg shadow-lg mx-12 p-5 mt-10 mb-24 text-lg  font-bold">
        <Link className="hover:text-blue-600" to="/">
          Home{" "}
        </Link>
        <i class="bi bi-box-arrow-in-right px-3"></i>
        <a className="text-blue-600">Filters</a>
      </div>
      <div className="bg-slate-100 flex justify-between items-center rounded-lg shadow-lg mx-12 p-4  mt-8 mb-24 text-lg  ">
        <select className="p-3 rounded-lg">
          <option selected>Best Selling</option>
          <option value="1">Newest Products</option>
          <option value="1">Oldest Products</option>
        </select>
        <div className="text-3xl">
          <i class="bi bi-grid bg-blue-600 px-2 p-1 rounded me-3 text-white"></i>
          <i class="bi bi-list-ul border-2 hover:bg-blue-600 px-2 p-1 rounded  hover:text-white"></i>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-slaye-50 border border-gray-300 rounded-lg">
            <p className="px-5 py-4 border-b border-gray-300  text-xl font-bold ">
              Product Type
            </p>
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <div class="my-6 ">
                <div className="flex items-center gap-5">
                  <input
                    className=" w-5 h-5 rounded-lg text-blue-600 "
                    type="checkbox"
                    value=""
                    id="id"
                  />
                  <label className="text-xl" for="id">
                    StandAlone
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5 rounded-lg text-blue-600 "
                    type="checkbox"
                    value=""
                    id="mbl"
                  />
                  <label className="text-xl" for="mbl">
                    Mobile
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5 rounded-lg text-blue-600 "
                    type="checkbox"
                    value=""
                    id="clt"
                  />
                  <label className="text-xl" for="clt">
                    Clothing
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5 rounded-lg text-blue-600 "
                    type="checkbox"
                    value=""
                    id="tethered"
                  />
                  <label className="text-xl" for="tethered">
                    Tethered
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slaye-50 my-10 border border-gray-300 rounded-lg">
            <p className="px-5 py-4 border-b border-gray-300  text-xl font-bold ">
              Choose Color
            </p>
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <div class="my-6 ">
                <div className="flex items-center gap-5">
                  <input
                    className=" w-5 h-5  "
                    type="radio"
                    value="x"
                    name="check"
                    id="black"
                  />
                  <label className="text-xl" for="black">
                    Black
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5  "
                    type="radio"
                    value="x"
                    name="check"
                    id="red"
                  />
                  <label className="text-xl" for="red">
                    Red
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5  "
                    type="radio"
                    value="x"
                    name="check"
                    id="green"
                  />
                  <label className="text-xl" for="green">
                    Green
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5  "
                    type="radio"
                    value="x"
                    name="check"
                    id="blue"
                  />
                  <label className="text-xl" for="blue">
                    Blue
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slaye-50 my-10 border border-gray-300 rounded-lg">
            <p className="px-5 py-4 border-b border-gray-300  text-xl font-bold ">
              Select Size
            </p>
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <div class="my-6 ">
                <div className="flex items-center gap-5">
                  <input
                    className=" w-5 h-5 bg-red-600 "
                    type="radio"
                    value="x"
                    name="check"
                    id="m"
                  />
                  <label className="text-xl" for="m">
                    M
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5 bg-red-600 "
                    type="radio"
                    value="x"
                    name="check"
                    id="x"
                  />
                  <label className="text-xl" for="x">
                    X
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5 bg-red-600 "
                    type="radio"
                    value="x"
                    name="check"
                    id="xl"
                  />
                  <label className="text-xl" for="xl">
                    XL
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    className="w-5 h-5 bg-red-600 "
                    type="radio"
                    value="x"
                    name="check"
                    id="xxl"
                  />
                  <label className="text-xl" for="xxl">
                    XXL
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 mb-16">
          <div className="grid grid-cols-12 gap-8 ">
            {GetAllProducts &&
              GetAllProducts.map((item) => (
                <div className="col-span-12 text-center relative sm:col-span-6 flex justify-center md:col-span-6 lg:col-span-4 ">
                  <div className="bg-slate-100 shadow-xl rounded-lg">
                    <img src={item.img} alt="" className="rounded-t-lg" />
                    <p className="py-1 absolute top-0 m-3 text-white text-sm font-bold rounded px-3 bg-blue-600">
                      {item.bagde}
                    </p>
                    <p className="text-xl mt-6 hover:text-blue-700 font-bold">
                      {item.name}
                    </p>
                    <span className="text-xl font-bold">{item.offer}</span>
                    <span className="text-xl mx-2 text-gray-500 line-through">
                      £150.00
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
                      className="py-2 px-5 bg-blue-600 hover:bg-slate-900  mb-6 text-white rounded-lg"
                    >
                      Add to Card
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

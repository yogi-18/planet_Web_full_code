import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import payment from "../assets/ecom-images/shopping-carts/shopping-cart-03/payment.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, getCartData } from "../redux/Actions/ProductAction";
import { invalidate } from "../redux/Slice/ProductSlice";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [count, setCount] = useState(1);
  const { cartData, deletedCartdata } = useSelector(
    (state) => state.productData
  );

  const dispatch = useDispatch();
  const total = cartData && cartData.reduce((sum, crr) => sum + crr.offer, 0);
  const TotalPayable =
    cartData && cartData.reduce((sum, crr) => sum + crr.offer, 20);
  useEffect(() => {
    dispatch(getCartData());
    dispatch(invalidate(["deletedCartdata"]));
  }, [deletedCartdata]);
  const removeFromCart = (item) => {
    dispatch(deleteCartData(item));
    toast.error("Product Deleted From Cart...");
  };

  return (
    <>
      <div className="bg-gray-100 lg:px-9 px-3 py-10 ">
        <div className="pt-11 pb-20 ">
          <div className="lg:h-[80px] md:h-[70px] h-[60px] flex items-center p-4   w-full bg-white">
            <div className="flex  items-center">
              <Link to="/" className="hover:text-blue-700 text-lg font-bold ">
                Home{" "}
              </Link>
              <i class="bi bi-arrow-right p-2 text-lg "></i>
              <Link to="#" className="text-blue-700 text-lg font-semibold">
                Shopping Cart
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <h1 className="text-4xl font-bold ">Shopping cart</h1>
            {/* <span className='text-xl text-gray-500 '>( Items)</span> */}
          </div>

          <div className="grid lg:grid-cols-12  mt-10">
            <div className="col-span-8 bg-white ">
              <div className="border-2 py-4 rounded-lg text-center  ">
                <div className="overflow-x-auto ">
                  <table className="table-auto w-full  ">
                    {/* head */}
                    <thead>
                      <tr className="border-b ">
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantiy</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {cartData &&
                        cartData.map((item, i) => (
                          <tr className="border-b  ">
                            <td>
                              <div className="flex items-center  space-x-3 mx-4">
                                <div className="avatar">
                                  <div className=" mb-4 mt-3 ">
                                    <img
                                      src={item.img}
                                      className="h-[90px] w-[90px]"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">{item.name}</div>
                                  <div className="text-sm opacity-50">
                                    {item.productSubTitle}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>Rs.{item.offer}</td>
                            <td className="">
                              <div className="flex gap-3  justify-center  ">
                                <button
                                  className=" border px-2 "
                                  onClick={(e) => setCount(count - 1)}
                                >
                                  -
                                </button>
                                <h1>{count}</h1>
                                <button
                                  className=" border px-2 "
                                  onClick={(e) => setCount(count + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td>
                              <button onClick={(e) => removeFromCart(item)}>
                                <i class="bi bi-trash3 fs-4 text-red-600"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:mx-4  ">
              <div className="bg-white w-full px-5 my-9 py-5">
                <div>
                  <h1 className="text-xl  mb-2 font-semibold">Apply Coupon</h1>
                  <p className="text-md text-gray-500 font-medium">
                    Using A Promo Code?
                  </p>
                </div>
                <div className="flex gap-4  mt-8 ">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="py-2 px-2 border-2 w-full"
                  />
                  <button className="text-center bg-blue-700 px-4 py-2 text-white font-medium ">
                    Apply
                  </button>
                </div>
              </div>
              <div className="bg-white w-full  ">
                <div className="mx-9 py-7">
                  <h1 className="text-2xl font-semibold pb-4">Total</h1>
                  <hr />
                  <div>
                    <div className="flex justify-between items-center pt-5 pb-5 ">
                      <div>
                        <h1 className="text-lg py-2 font-medium ">Total</h1>
                        <h1 className="text-lg py-2 font-medium "> Delivery</h1>
                        <h1 className="text-lg py-2 font-medium ">Discount </h1>
                      </div>
                      <div>
                        <h1 className="text-lg py-2 font-bold">${total}</h1>
                        <h1 className="text-lg py-2 font-bold">$20.00</h1>
                        <h1 className="text-lg py-2 font-bold">-$0</h1>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center pt-6 ">
                    <h1 className="text-lg py-3 font-semibold ">Subtotal </h1>
                    <h1 className="text-lg py-3 font-bold">${TotalPayable}</h1>
                  </div>
                  <button className="font-medium text-lg bg-blue-700 w-full px-2 py-3 rounded-md mt-4 opacity-90 text-white">
                    Checkout
                  </button>

                  <div className="mt-7">
                    <h1 className="text-base mb-5 text-gray-500">We Accept:</h1>
                    <img src={payment} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;

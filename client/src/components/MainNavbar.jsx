import React, { useEffect, useState } from "react";
import planetlogo from "../assets/images/logo/logo.svg";
import WhiteT_shirt from "../assets/ecom-images/checkout/checkout-01/image-02.jpg";
import Black_shirt from "../assets/ecom-images/checkout/checkout-01/image-03.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteFromfav,
  addToCart,
  deleteCartData,
  getCartData,
  getFavourites,
} from "../redux/Actions/ProductAction";
import { invalidate } from "../redux/Slice/ProductSlice";
import { toast } from "react-toastify";

const MainNavbar = () => {
  const [fav, setFav] = useState(false);
  const [carttoggle, setCartToggle] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { favourites, AddedToFav, deletedFav, cartData, deletedCartdata } =
    useSelector((state) => state.productData);

  const total = cartData && cartData.reduce((sum, crr) => sum + crr.offer, 0);
  const TotalPayable =
    cartData && cartData.reduce((sum, crr) => sum + crr.offer, 20);

  useEffect(() => {
    dispatch(getCartData());
  }, []);
  useEffect(() => {
    dispatch(getFavourites());
    dispatch(invalidate(["AddedToFav"]));
  }, [AddedToFav]);
  useEffect(() => {
    dispatch(getFavourites());
    dispatch(invalidate(["deletedFav"]));
  }, [deletedFav]);
  useEffect(() => {
    dispatch(getCartData());
    dispatch(invalidate(["deletedCartdata"]));
  }, [deletedCartdata]);
  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const removeFromFav = (item) => {
    dispatch(DeleteFromfav(item));
    toast.error("Product Deleted From Favourites...");
  };
  const removeFromCart = (item) => {
    dispatch(deleteCartData(item));
    toast.error("Product Deleted From Cart...");
  };

  const addedTocart = (item) => {
    // Assuming 'id' is the property you want to remove from the 'item' object
    const { id, ...itemWithoutId } = item; // Using destructuring to extract 'id' and the rest of the properties

    console.log(itemWithoutId); // Logging the item without the 'id'

    dispatch(addToCart(itemWithoutId));
    toast.success("Product Added To Cart...");
  };

  return (
    <div className="border-b">
      <div className=" flex justify-between items-center mx-14 mt-2  py-3">
        <div className="flex items-center justify-between gap-4 ">
          <div>
            <Link to={"/"}>
              <img src={planetlogo} alt="logo" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex justify-between  text-center text-xl gap-7">
              <Link to={"/"}>Home</Link>
              <Link to={"/shop"}>Shop</Link>
              <Link>Products</Link>
              <Link>Accessories</Link>
              <Link>Contact</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="hidden xl:block">
            <div className="flex gap-2">
              <i class="bi bi-phone bg-slate-200 rounded-full px-4 flex items-center text-2xl"></i>
              <div>
                <p>Need Help ?</p>
                <p>+001 123 456 789</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-between gap-3">
                <div>
                  <button type="btn" className="hover:cursor-pointer">
                    <i class=" hidden md:block lg:block bi bi-person-circle bg-slate-200 rounded-full px-3 py-2 mx-auto   text-2xl"></i>
                  </button>
                </div>
                {/* Favourite start here  */}
                <div>
                  <button
                    type="btn"
                    className="hover:cursor-pointer"
                    onClick={(e) =>
                      `${setFav(!fav)}, ${setCartToggle(
                        false
                      )},${setHamburgerMenu(false)}}`
                    }
                  >
                    <i class="bi bi-heart hidden md:block lg:block bg-slate-200 rounded-full px-3 py-2  text-2xl  mx-auto relative">
                      <span className="rounded-full  bg-blue-700 text-white px-3  text-sm absolute top-[-5px] right-[-3px]">
                        {favourites && favourites.length}
                      </span>
                    </i>
                  </button>

                  {
                    <div
                      className={
                        fav
                          ? "absolute z-10 bg-white text-black p-3 border-2 rounded right-36 top-36"
                          : "hidden"
                      }
                    >
                      {favourites &&
                        favourites.map((item) => (
                          <div className="flex gap-4 items-center ">
                            <img
                              src={item.img}
                              alt="whaite-tshirt "
                              className="rounded h-14"
                            />
                            <div>
                              <p>{item.name} </p>
                              <h6 className="font-semibold">
                                Discount Rs. = {item.offerDis}
                              </h6>
                            </div>
                            <h4 className="font-bold">
                              Price Rs. = {item.offer}
                            </h4>
                            <div>
                              <div className="flex gap-2">
                                <div>
                                  <button
                                    onClick={(e) => addedTocart(item)}
                                    className="w-full bg-blue-800 text-white p-1 rounded"
                                  >
                                    Add To Cart
                                  </button>
                                </div>
                                <div>
                                  <button
                                    onClick={(e) => removeFromFav(item)}
                                    className="w-full bg-blue-800 text-white p-1 rounded"
                                  >
                                    remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  }
                </div>
                {/* Favourite end here  */}

                {/* cart Start here */}
                <div>
                  <button
                    type="btn"
                    className="hover:cursor-pointer"
                    onClick={(e) =>
                      `${setCartToggle(!carttoggle)} , ${setFav(
                        false
                      )} ${setHamburgerMenu(false)}}`
                    }
                  >
                    <i class="bi bi-basket2 hidden md:block lg:block bg-slate-200 rounded-full px-3 py-2  text-2xl  mx-auto relative">
                      <span className="rounded-full  bg-blue-700 text-white px-3  text-sm absolute top-[-5px] right-[-3px]">
                        {cartData && cartData.length}
                      </span>
                    </i>
                  </button>

                  {
                    <div
                      className={
                        carttoggle
                          ? "absolute z-10 bg-white text-black p-3 border-2 rounded right-16 top-36"
                          : "hidden"
                      }
                    >
                      {cartData &&
                        cartData.map((item) => (
                          <div className="border-b">
                            <div className="flex gap-4 items-center my-2 mb-8 mt-4 ">
                              <img
                                src={item.img}
                                alt="whaite-tshirt"
                                className="rounded h-20"
                              />
                              <div>
                                <p>{item.name}</p>
                              </div>
                              <h4 className="font-bold">Rs.{item.offer}</h4>
                              <div>
                                <button
                                  onClick={(e) => removeFromCart(item)}
                                  className="w-full bg-blue-800 text-white p-1 rounded"
                                >
                                  remove
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}

                      <div className="mt-4">
                        <div className="flex justify-between">
                          <h4>Subtotal</h4>
                          <h4 className="font-bold">Rs.{total}</h4>
                        </div>
                        <div className="flex justify-between">
                          <h4>Shipping Cost (+)</h4>
                          <h4 className="font-bold">Rs.20</h4>
                        </div>
                      </div>
                      <div className="mt-4 border-t pt-4">
                        <div className="flex justify-between">
                          <h4>Total Payable</h4>
                          <h4 className="font-bold"> Rs{TotalPayable}</h4>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={(e) => navigate("/order")}
                          className="w-full bg-blue-800 text-white p-3 rounded mt-2 "
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  }
                </div>
                {/* cart Start here */}

                {/* hamburger Menu Start  */}
                <div className="md:mt-2">
                  <button
                    type="btn "
                    onClick={(e) =>
                      `${setHamburgerMenu(!hamburgerMenu)} ${setCartToggle(
                        false
                      )}${setFav(false)}}`
                    }
                  >
                    <i class="lg:hidden  mx-au  bi bi-list bg-slate-200 rounded-full px-3 py-2 items-center text-2xl"></i>
                  </button>
                  {
                    <div
                      className={
                        hamburgerMenu
                          ? "absolute text-black p-8 w-48  border-2 rounded right-10 top-20 md:top-36 z-10 bg-white "
                          : "hidden"
                      }
                    >
                      <div className=" flex flex-col gap-6">
                        <a className="font-bold" href="">
                          Home
                        </a>
                        <a className="font-bold" href="">
                          Shop
                        </a>
                        <a className="font-bold" href="">
                          Products
                        </a>
                        <a className="font-bold" href="">
                          Accessories
                        </a>
                        <a className="font-bold" href="">
                          Contact
                        </a>
                      </div>
                    </div>
                  }
                </div>
                {/* hamburger Menu Start  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;

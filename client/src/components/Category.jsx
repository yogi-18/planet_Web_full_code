import React from "react";
import accessories from "../assets/ecom-images/categories/category-01/image-01.jpg";
import bags from "../assets/ecom-images/categories/category-01/image-02.jpg";
import electronics from "../assets/ecom-images/categories/category-01/image-03.jpg";
import shoes from "../assets/ecom-images/categories/category-01/image-04.jpg";

const Category = () => {
  const productCategory = [
    {
      img: accessories,
      categories: "Accessories",
      available: "8 Products Available",
    },
    { img: bags, categories: "Bags", available: "4 Products Available" },
    {
      img: electronics,
      categories: "Electronics",
      available: "12 Products Available",
    },
    {
      img: shoes,
      categories: "Shoes",
      available: "20 Products Available",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center lg:mt-24   ">
          Shop By Category
        </h1>
        <p className="text-center mx-auto mt-8 text-xl">
          There are many variations of passages of Lorem Ipsum available <br />
          but the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="grid grid-cols-12 mt-16 md:gap-4 lg:gap-3   ">
        {productCategory.map((item) => (
          <div className="col-span-12 mx-auto sm:col-span-12 md:col-span-6 lg:col-span-3   sm:mx-auto  md:mx-20 lg:mx-auto">
            <div className="hover:cursor-pointer hover:text-blue-500">
              <img src={item.img} alt="productCategory" />
              <h1 className="text-center text-2xl font-semibold sm:mt-10 md:mt-0">
                {item.categories}
              </h1>
            </div>
            <h1 className="text-center sm:mb-10 md:mb-0">{item.available}</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <button
          type="btn"
          className="bg-blue-600  text-white my-14 p-2 text-center rounded w-52 "
        >
          Explore All Category
        </button>
      </div>
    </div>
  );
};

export default Category;

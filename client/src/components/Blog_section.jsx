import React from "react";
import img_1 from "../assets/images/blogs/blog-01/image-01.jpg";
import img_2 from "../assets/images/blogs/blog-01/image-02.jpg";
import img_3 from "../assets/images/blogs/blog-01/image-03.jpg";

const Blog_section = () => {
  const Blog = [
    {
      img: img_1,
      Date: "Dec 22 , 2023",
      Heading: "Meet  AutoManage , the best AI Management Tools ",
      Info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: img_2,
      Date: "Mar 11 , 2023",
      Heading: "How To Earn More Money As A Wellness Coach ",
      Info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: img_3,
      Date: "Oct 24 , 2023",
      Heading: "The no-fuss guide to upselling and cross selling ",
      Info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div>
      <div>
        <h1 className=" text-blue-600 font-semibold text-center lg:mt-24   ">
          Our Blogs
        </h1>
        <h1 className="text-4xl font-bold text-center mt-1">Our Recent News</h1>
        <p className="text-center mx-auto mt-4 text-xl">
          There are many variations of passages of Lorem Ipsum available <br />
          but the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="grid grid-cols-12     mt-16 md:gap-4 lg:gap-3   ">
        {Blog.map((item) => (
          <div className="sm:col-span-12 md:col-span-6  lg:col-span-4 col-span-12 mx-auto   lg:mx-12">
            <div className="">
              <img
                src={item.img}
                alt="productCategory"
                className="w-full mt-4"
              />
              <button
                type="btn"
                className="bg-blue-600  text-white my-6 p-1 text-center rounded  "
              >
                {item.Date}
              </button>

              <h1 className="text-2xl font-semibold hover:cursor-pointer hover:text-blue-600">
                {item.Heading}
              </h1>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog_section;

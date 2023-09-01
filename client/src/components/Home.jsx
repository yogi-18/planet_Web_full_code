import React from "react";
import Addcart from "./Addcart";
import Watch from "./Watch";
import Glass from "./Glass";
import Category from "./Category";
import Blog_section from "./Blog_section";
import Headers from "./Headers";

const Allpage = () => {
  return (
    <div>
      <Headers />
      <Addcart />
      <Watch />
      <Glass />
      <Category />
      <Blog_section />
    </div>
  );
};

export default Allpage;

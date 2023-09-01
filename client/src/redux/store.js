import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slice/ProductSlice";

const reduxStore = configureStore({
  reducer: {
    productData: ProductSlice,
  },
});

export default reduxStore;

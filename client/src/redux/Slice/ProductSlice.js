import { createSlice } from "@reduxjs/toolkit";
import {
  DeleteFromfav,
  addToCart,
  addToFavourites,
  deleteCartData,
  getCartData,
  getFavourites,
  getProducts,
} from "../Actions/ProductAction";

const productSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    invalidate: (state, { payload }) => {
      payload.forEach((item) => {
        state[item] = false;
      });
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.GetAllProducts = payload;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // slice For favourite Actions start here
      .addCase(addToFavourites.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(addToFavourites.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.AddedToFav = payload;
      })
      .addCase(addToFavourites.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getFavourites.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getFavourites.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.favourites = payload;
      })
      .addCase(getFavourites.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(DeleteFromfav.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(DeleteFromfav.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.deletedFav = true;
      })
      .addCase(DeleteFromfav.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // slice For favourite Actions end here

      // slice for cart Actions start here
      .addCase(addToCart.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.AddedToCart = payload;
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getCartData.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getCartData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cartData = payload;
      })
      .addCase(getCartData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteCartData.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(deleteCartData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.deletedCartdata = true;
      })
      .addCase(deleteCartData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
  // slice for cart Actions end here
});

export const { invalidate } = productSlice.actions;
export default productSlice.reducer;

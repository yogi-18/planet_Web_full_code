import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const getProducts = createAsyncThunk("/getProducts", async () => {
  try {
    const { data } = await API.get("/products");
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

// Add to Favourite and delete from favourte action start here
export const addToFavourites = createAsyncThunk(
  "/AddedtoFavourite",
  async (favdata, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/favourite", favdata);
      return true;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const getFavourites = createAsyncThunk(
  "/getFavourite",
  async (favdata, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/favourite");
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const DeleteFromfav = createAsyncThunk(
  "/deleteFavourite",
  async (favdata, { rejectWithValue }) => {
    try {
      const { data } = await API.delete(`/favourite/${favdata.id}`);
      return true;
    } catch (error) {
      console.log(error.message);
    }
  }
);
// Add to Favourite and delete from favourte action end here

// Add to cart and delete from cart action start here
export const addToCart = createAsyncThunk(
  "/AddedToCart",
  async (cartData, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/cart", cartData);
      return true;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const getCartData = createAsyncThunk(
  "/getcartdata",
  async (cartData, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/cart");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const deleteCartData = createAsyncThunk(
  "/deletecartdata",
  async (cartData, { rejectWithValue }) => {
    try {
      const { data } = await API.delete(`/cart/${cartData.id}`);
      console.log(data);
      return true;
    } catch (error) {
      console.log(error.message);
    }
  }
);

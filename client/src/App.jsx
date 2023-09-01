import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainNavbar from "./components/MainNavbar";
import Secondfooter from "./components/Secondfooter";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlaceOrder from "./components/PlaceOrder";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <MainNavbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/order"} element={<PlaceOrder />} />
        </Routes>
        <Secondfooter />
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;

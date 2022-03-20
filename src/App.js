import React from "react";
import { LandingPage, WishlistPage, ProductPage, CartPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Footer, Navigation } from "./components";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

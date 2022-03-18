import React from "react";
import { LandingPage, WishlistPage, ProductPage, CartPage } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;

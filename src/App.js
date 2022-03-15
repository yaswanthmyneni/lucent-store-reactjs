import React from "react";
import { LandingPage, WishlistPage, ProductPage } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
};

export default App;

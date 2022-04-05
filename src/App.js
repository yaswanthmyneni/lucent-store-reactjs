import React from "react";
import {
  LandingPage,
  ProductPage,
  WishlistPage,
  CartPage,
  SignInPage,
  SignUpPage,
  LogoutPage,
  ErrorPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { Footer, Navigation } from "./components";

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

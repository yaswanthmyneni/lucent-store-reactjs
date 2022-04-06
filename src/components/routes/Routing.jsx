import {
  LandingPage,
  ProductPage,
  WishlistPage,
  CartPage,
  SignInPage,
  SignUpPage,
  LogoutPage,
  ErrorPage,
} from "../../pages";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
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
  );
};

export { Routing };

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
import { RequireAuth } from "../require-auth/RequireAuth";

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/logout" element={<LogoutPage />} />

      <Route
        path="/wishlist"
        element={
          <RequireAuth>
            <WishlistPage />
          </RequireAuth>
        }
      />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <CartPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export { Routing };

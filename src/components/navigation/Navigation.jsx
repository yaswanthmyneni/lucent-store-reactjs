import "./navigation.css";
import { IconWithBadge } from "../index";
import { NavLink, useLocation } from "react-router-dom";
import { useWishlistContext, useCartContext } from "../../context";

const Navigation = () => {
  // wishlist Context
  const { wishlist } = useWishlistContext();

  // cart context
  const {
    cartState: { cartList },
  } = useCartContext();

  // getting encodedToken from localStorage
  const encodedToken = localStorage.getItem("token");

  // from react-router-dom
  const path = useLocation();

  return (
    <header className="header">
      <div className="navbar-container">
        <NavLink className="navbar" to="/">
          <h1 className="navbar-m-lr-1">LUCENT STORE</h1>
        </NavLink>
        {!encodedToken &&
          path.pathname !== "/logout" &&
          path.pathname !== "/signin" &&
          path.pathname !== "/signup" && (
            <NavLink className="navbar-m-left-auto navbar" to="/signin">
              <h5 className="navbar-m-lr-1">LOGIN</h5>
            </NavLink>
          )}
        {encodedToken &&
          path.pathname !== "/logout" &&
          path.pathname !== "/signin" &&
          path.pathname !== "/signup" && (
            <NavLink
              className="navbar-m-left-auto navbar"
              to="/logout"
              onClick={() => localStorage.removeItem("token")}
            >
              <h5 className="navbar-m-lr-1">LOGOUT</h5>
            </NavLink>
          )}
        {path.pathname !== "/logout" &&
          path.pathname !== "/signin" &&
          path.pathname !== "/signup" && (
            <div className="search-bar-border navbar-m-lr-1">
              <input className="input search-bar-input" type="text" />
              <i className="fas fa-search"></i>
            </div>
          )}
        {path.pathname !== "/products" &&
          path.pathname !== "/logout" &&
          path.pathname !== "/signin" &&
          path.pathname !== "/signup" && (
            <NavLink className="navbar navbar-m-lr-1" to="/products">
              <i className="fa-solid fa-store"></i>
            </NavLink>
          )}
        {encodedToken &&
          path.pathname !== "/signin" &&
          path.pathname !== "/signup" && (
            <NavLink to="/wishlist">
              <IconWithBadge count={wishlist.length}>
                <i className="fas fa-heart icon-badge"></i>
              </IconWithBadge>
            </NavLink>
          )}
        {encodedToken &&
          path.pathname !== "/signin" &&
          path.pathname !== "/signup" && (
            <NavLink to="/cart">
              <IconWithBadge className="m-r-2rem" count={cartList.length}>
                <i className="fas fa-shopping-cart icon-badge"></i>
              </IconWithBadge>
            </NavLink>
          )}
      </div>
    </header>
  );
};

export { Navigation };

import "./navigation.css";
import { IconWithBadge } from "../index";
import { NavLink, useLocation } from "react-router-dom";
import {
  useWishlistContext,
  useCartContext,
  useProductContext,
} from "../../context";
import { useEffect, useState } from "react";

const Navigation = () => {
  // product page context
  const {
    productPageState: { searchParam },
    productPageDispatch,
  } = useProductContext();

  // wishlist Context
  const { wishlist } = useWishlistContext();

  // cart context
  const {
    cartState: { cartList },
  } = useCartContext();

  // getting encodedToken from localStorage
  const encodedToken = localStorage.getItem("token");

  // from react-router-dom
  const location = useLocation();

  return (
    <header className="header">
      <div className="navbar-container">
        <NavLink className="navbar" to="/">
          <h1 className="navbar-m-lr-1">LUCENT STORE</h1>
        </NavLink>
        {!encodedToken &&
          (location.pathname === "/products" || location.pathname === "/") && (
            <NavLink
              className="navbar-m-left-auto navbar"
              to="/signin"
              state={{ from: location }}
            >
              <h5 className="navbar-m-lr-1">LOGIN</h5>
            </NavLink>
          )}
        {encodedToken && location.pathname !== "/logout" && (
          <NavLink
            className="navbar-m-left-auto navbar"
            to="/logout"
            onClick={() => localStorage.clear()}
          >
            <h5 className="navbar-m-lr-1">LOGOUT</h5>
          </NavLink>
        )}
        {location.pathname === "/products" && (
          <div className="search-bar-border navbar-m-lr-1">
            <input
              className="input search-bar-input"
              type="text"
              value={searchParam}
              onChange={(e) => {
                productPageDispatch({
                  type: "SEARCH",
                  payload: e.target.value,
                });
              }}
            />
            <i className="fas fa-search"></i>
          </div>
        )}
        {location.pathname !== "/products" && location.pathname !== "/logout" && (
          <NavLink className="navbar navbar-m-lr-1" to="/products">
            <i className="fa-solid fa-store"></i>
          </NavLink>
        )}
        {(location.pathname === "/" ||
          location.pathname === "/products" ||
          location.pathname === "/cart") && (
          <NavLink to="/wishlist">
            <IconWithBadge count={wishlist.length}>
              <i className="fas fa-heart icon-badge"></i>
            </IconWithBadge>
          </NavLink>
        )}
        {(location.pathname === "/" ||
          location.pathname === "/products" ||
          location.pathname === "/wishlist") && (
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

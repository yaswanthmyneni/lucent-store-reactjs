import "./navigation.css";
import { IconWithBadge } from "../index";
import { NavLink, useLocation } from "react-router-dom";
import { useWishlistContext, useCartContext } from "../../context";
import { useEffect, useState } from "react";
import axios from "axios";

const Navigation = () => {
  // wishlist Context
  const { wishlist, setWishlist } = useWishlistContext();

  // cart context
  const {
    cartState: { cartList },
    cartDispatch,
  } = useCartContext();

  // getting encodedToken from localStorage
  const encodedToken = localStorage.getItem("token");

  // from react-router-dom
  const path = useLocation();

  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    const cartList = JSON.parse(localStorage.getItem("cartList"));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (logout) {
      cartList?.map((item) => {
        return (async () =>
          await axios({
            method: "DELETE",
            url: `/api/user/cart/${item._id}`,
            headers: { authorization: encodedToken },
          }))();
      });
      wishlist?.map((item) => {
        return (async () =>
          await axios({
            method: "DELETE",
            url: `/api/user/wishlist/${item._id}`,
            headers: { authorization: encodedToken },
          }))();
      });
      localStorage.clear();
      setWishlist([]);
      cartDispatch({ type: "cartList", payload: [] });
      setLogout(false);
    }
  }, [setWishlist, cartDispatch, logout]);

  return (
    <header className="header">
      <div className="navbar-container">
        <NavLink className="navbar" to="/">
          <h1 className="navbar-m-lr-1">LUCENT STORE</h1>
        </NavLink>
        {!encodedToken &&
          (path.pathname === "/products" || path.pathname === "/") && (
            <NavLink className="navbar-m-left-auto navbar" to="/signin">
              <h5 className="navbar-m-lr-1">LOGIN</h5>
            </NavLink>
          )}
        {encodedToken && path.pathname !== "/logout" && (
          <NavLink
            className="navbar-m-left-auto navbar"
            to="/logout"
            onClick={() => {
              setLogout(true);
            }}
          >
            <h5 className="navbar-m-lr-1">LOGOUT</h5>
          </NavLink>
        )}
        {path.pathname === "/products" && (
          <div className="search-bar-border navbar-m-lr-1">
            <input className="input search-bar-input" type="text" />
            <i className="fas fa-search"></i>
          </div>
        )}
        {path.pathname !== "/products" && path.pathname !== "/logout" && (
          <NavLink className="navbar navbar-m-lr-1" to="/products">
            <i className="fa-solid fa-store"></i>
          </NavLink>
        )}
        {encodedToken && (
          <NavLink to="/wishlist">
            <IconWithBadge count={wishlist.length}>
              <i className="fas fa-heart icon-badge"></i>
            </IconWithBadge>
          </NavLink>
        )}
        {encodedToken && (
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

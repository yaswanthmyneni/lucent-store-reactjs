import "./navigation.css";
import { IconWithBadge } from "../index";
import { NavLink, useLocation } from "react-router-dom";
import {
  useWishlistContext,
  useCartContext,
  useProductContext,
} from "../../context";
import { useState } from "react";

const Navigation = () => {
  const [isMenu, setIsMenu] = useState(false);

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
    <>
      <header className="header">
        <div className="navbar-container">
          <NavLink className="navbar" to="/">
            <h1 className="navbar-m-lr-1">LUCENT STORE</h1>
          </NavLink>
          {location.pathname === "/products" && (
            <div className="search-bar-border navbar-m-left-auto">
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
          <div className="navbar menu-icon navbar-m-lr-1">
            {!isMenu && (
              <i class="fa-solid fa-bars" onClick={() => setIsMenu(true)}></i>
            )}
            {isMenu && (
              <i class="fa-solid fa-xmark" onClick={() => setIsMenu(false)}></i>
            )}
          </div>
          {!encodedToken &&
            (location.pathname === "/products" ||
              location.pathname === "/") && (
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
          {location.pathname !== "/products" &&
            location.pathname !== "/logout" && (
              <NavLink className="navbar navbar-m-lr-1" to="/products">
                <i className="fa-solid fa-store"></i>
              </NavLink>
            )}
          {location.pathname !== "/logout" &&
            location.pathname !== "/wishlist" &&
            location.pathname !== "/signin" &&
            location.pathname !== "/signup" && (
              <NavLink to="/wishlist">
                <IconWithBadge count={wishlist.length}>
                  <i className="fas fa-heart icon-badge"></i>
                </IconWithBadge>
              </NavLink>
            )}
          {location.pathname !== "/logout" &&
            location.pathname !== "/cart" &&
            location.pathname !== "/signin" &&
            location.pathname !== "/signup" && (
              <NavLink to="/cart">
                <IconWithBadge count={cartList.length}>
                  <i className="fas fa-shopping-cart icon-badge"></i>
                </IconWithBadge>
              </NavLink>
            )}
          {location.pathname !== "/logout" &&
            location.pathname !== "/orders" &&
            location.pathname !== "/signin" &&
            location.pathname !== "/signup" && (
              <NavLink className="navbar navbar-m-lr-1" to="/orders">
                <i className="fa-solid fa-box"></i>
              </NavLink>
            )}
        </div>
      </header>
      {isMenu && location.pathname !== "/logout" && (
        <div className="menu-container">
          <div className="menu">
            {location.pathname !== "/products" &&
              location.pathname !== "/logout" && (
                <NavLink
                  className="menu-item"
                  to="/products"
                  onClick={() => setIsMenu(false)}
                >
                  <i className="fa-solid fa-store text-2xl"></i>
                  <span className="text-2xl">store</span>
                </NavLink>
              )}
            {location.pathname !== "/logout" &&
              location.pathname !== "/wishlist" &&
              location.pathname !== "/signin" &&
              location.pathname !== "/signup" && (
                <NavLink
                  className="menu-item"
                  to="/wishlist"
                  onClick={() => setIsMenu(false)}
                >
                  <div className=" display-badge pos-rel-badge">
                    <i className="fas fa-heart icon-badge text-2xl"></i>
                    {wishlist.length === 0 ? (
                      ""
                    ) : (
                      <span className="badge badge-online badge-to-icon">
                        {wishlist.length}
                      </span>
                    )}
                  </div>
                  <span className="text-2xl">wishlist</span>
                </NavLink>
              )}
            {location.pathname !== "/logout" &&
              location.pathname !== "/cart" &&
              location.pathname !== "/signin" &&
              location.pathname !== "/signup" && (
                <NavLink
                  className="menu-item"
                  to="/cart"
                  onClick={() => setIsMenu(false)}
                >
                  <div className=" display-badge pos-rel-badge">
                    <i className="fas fa-shopping-cart icon-badge text-2xl"></i>
                    {cartList.length === 0 ? (
                      ""
                    ) : (
                      <span className="badge badge-online badge-to-icon">
                        {cartList.length}
                      </span>
                    )}
                  </div>
                  <span className="text-2xl">cart</span>
                </NavLink>
              )}
            {location.pathname !== "/logout" &&
              location.pathname !== "/orders" &&
              location.pathname !== "/signin" &&
              location.pathname !== "/signup" && (
                <NavLink
                  className="menu-item"
                  to="/orders"
                  onClick={() => setIsMenu(false)}
                >
                  <i className="fa-solid fa-box text-2xl"></i>
                  <span className="text-2xl">all order</span>
                </NavLink>
              )}
            {!encodedToken &&
              (location.pathname === "/products" ||
                location.pathname === "/") && (
                <NavLink
                  onClick={() => setIsMenu(false)}
                  className="menu-item text-xl"
                  to="/signin"
                  state={{ from: location }}
                >
                  LOGIN
                </NavLink>
              )}
            {encodedToken && location.pathname !== "/logout" && (
              <NavLink
                className="menu-item text-xl"
                to="/logout"
                onClick={() => {
                  localStorage.clear();
                  setIsMenu(false);
                }}
              >
                LOGOUT
              </NavLink>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export { Navigation };

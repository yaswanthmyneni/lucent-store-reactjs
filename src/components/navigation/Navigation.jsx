import "./navigation.css";
import { IconWithBadge } from "../index";
import { NavLink } from "react-router-dom";
import { useCartContext, useWishlistContext } from "../../context";

const Navigation = () => {
  // wishlist Context
  const { wishlist } = useWishlistContext();

  // cart context
  const {
    cartState: { cartList },
  } = useCartContext();

  return (
    <header className="header">
      <div className="navbar-container">
        <NavLink className="navbar" to="/">
          <h1 className="navbar-m-lr-1">LUCENT STORE</h1>
        </NavLink>
        <NavLink className="navbar-m-left-auto navbar" to="/login">
          <h5 className="navbar-m-lr-1">LOGIN</h5>
        </NavLink>
        <div className="search-bar-border navbar-m-lr-1">
          <input className="input search-bar-input" type="text" />
          <i className="fas fa-search"></i>
        </div>
        <NavLink className="navbar navbar-m-lr-1" to="/products">
          <i className="fa-solid fa-store"></i>
        </NavLink>
        <NavLink to="/wishlist">
          <IconWithBadge count={wishlist.length}>
            <i className="fas fa-heart icon-badge"></i>
          </IconWithBadge>
        </NavLink>
        <NavLink to="/cart">
          <IconWithBadge className="m-r-2rem" count={cartList.length}>
            <i className="fas fa-shopping-cart icon-badge"></i>
          </IconWithBadge>
        </NavLink>
      </div>
    </header>
  );
};

export { Navigation };

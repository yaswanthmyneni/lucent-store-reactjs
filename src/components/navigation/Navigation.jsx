import "./navigation.css";
import { IconWithBadge } from "../index";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="header">
      <div className="navbar-container">
        <Link className="navbar" to="/">
          <h1 className="navbar-m-lr-1">LUCENT STORE</h1>
        </Link>
        <Link className="navbar-m-left-auto navbar" to="/login">
          <h5 className="navbar-m-lr-1">LOGIN</h5>
        </Link>
        <div className="search-bar-border navbar-m-lr-1">
          <input className="input search-bar-input" type="text" />
          <i className="fas fa-search"></i>
        </div>
        <Link className="navbar navbar-m-lr-1" to="/products">
          <i className="fa-solid fa-store"></i>
        </Link>
        <Link to="/wishlist">
          <IconWithBadge>
            <i className="fas fa-heart icon-badge"></i>
          </IconWithBadge>
        </Link>
        <Link to="/cart">
          <IconWithBadge className="m-r-2rem">
            <i className="fas fa-shopping-cart icon-badge"></i>
          </IconWithBadge>
        </Link>
      </div>
    </header>
  );
};

export { Navigation };

import "./navigation.css";
import { IconWithBadge } from "../index";

const Navigation = () => {
  return (
    <header className="header">
      <div className="navbar-container">
        <a className="navbar" href="./home.html">
          <h1 className="navbar-m-lr-1">LUCENT STORE</h1>
        </a>
        <a className="navbar-m-left-auto navbar" href="#">
          <h5 className="navbar-m-lr-1">LOGIN</h5>
        </a>
        <div className="search-bar-border navbar-m-lr-1">
          <input className="input search-bar-input" type="text" />
          <i className="fas fa-search"></i>
        </div>
        <a className="navbar navbar-m-lr-1" href="#">
          <i className="fa-solid fa-store"></i>
        </a>
        <IconWithBadge>
          <i className="fas fa-heart icon-badge"></i>
        </IconWithBadge>
        <IconWithBadge className="m-r-2rem">
          <i className="fas fa-shopping-cart icon-badge"></i>
        </IconWithBadge>
      </div>
    </header>
  );
};

export { Navigation };

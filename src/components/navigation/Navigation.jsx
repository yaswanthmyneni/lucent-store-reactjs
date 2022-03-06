import "./navigation.css";

const Navigation = () => {
  return (
    <header id="header" className="header">
      <div className="navbar-container">
        <a className="navbar" href="./home.html">
          <h1 className="navbar-m-lr-1">LUCENT STORE</h1>
        </a>
        <a className="navbar-m-left-auto navbar" href="../login/login.html">
          <h5 className="navbar-m-lr-1">LOGIN</h5>
        </a>
        <div className="search-bar-border navbar-m-lr-1">
          <input className="input search-bar-input" type="text" />
          <i className="fas fa-search"></i>
        </div>
        <a className="navbar navbar-m-lr-1" href="../product/product.html">
          <i className="fa-solid fa-store"></i>
        </a>
        <a className="navbar navbar-m-lr-1" href="../wishlist/wishlist.html">
          <div className="display-badge pos-rel-badge">
            <i className="fas fa-heart icon-badge"></i>
            <span className="badge badge-online badge-to-icon">9</span>
          </div>
        </a>
        <a className="navbar navbar-m-lr-1 m-r-2rem" href="../cart/cart.html">
          <div className="display-badge pos-rel-badge">
            <i className="fas fa-shopping-cart icon-badge"></i>
            <span className="badge badge-online badge-to-icon">9</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export { Navigation };

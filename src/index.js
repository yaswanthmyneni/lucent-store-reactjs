import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  CartContextProvider,
  ProductContextProvider,
  WishlistContextProvider,
} from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <WishlistContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

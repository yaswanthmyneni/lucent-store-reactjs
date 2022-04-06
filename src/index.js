import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AuthContextProvider,
  CartContextProvider,
  ProductContextProvider,
  WishlistContextProvider,
  ToastProvider
} from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <ProductContextProvider>
                <App />
              </ProductContextProvider>
            </WishlistContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

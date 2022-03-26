import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { cartReducer } from "../reducers";
import axios from "axios";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartList: [],
  });

  const { cartList } = cartState;

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    const cartListLocalStorage = JSON.parse(localStorage.getItem("cartList"));
    if (
      cartList.length < 1 &&
      cartListLocalStorage !== null &&
      cartListLocalStorage.length >= 1
    ) {
      cartListLocalStorage.map((item) => {
        return (async () => {
          const response = await axios({
            method: "post",
            url: `/api/user/cart`,
            headers: { authorization: encodedToken },
            data: {
              product: item,
            },
          });
          cartDispatch({
            type: "cartList",
            payload: response.data.cart,
          });
        })();
      });
    }
  }, [cartList]);

  const value = { cartState, cartDispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { useCartContext, CartContextProvider };

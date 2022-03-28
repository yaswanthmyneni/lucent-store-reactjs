import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartList: [],
  });

  const value = { cartState, cartDispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { useCartContext, CartContextProvider };

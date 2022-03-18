import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartList: [],
  });

  const value = { cartState, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { useCartContext, CartContextProvider };

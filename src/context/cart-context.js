import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "cartList":
      return { ...cartState, cartList: action.payload };
    default:
      return cartState;
  }
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartList: [],
  });

  const value = { cartState, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { useCartContext, CartContextProvider };

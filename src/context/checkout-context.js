import { createContext, useContext, useReducer } from "react";
import { checkoutReducer } from "../reducers";

const CheckoutContext = createContext();
const useCheckoutContext = () => useContext(CheckoutContext);

const CheckoutProvider = ({ children }) => {
  const [checkoutState, checkoutDispatch] = useReducer(checkoutReducer, {
    addressList: [],
    addressId: null,
  });

  const value = { checkoutState, checkoutDispatch };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export { useCheckoutContext, CheckoutProvider };

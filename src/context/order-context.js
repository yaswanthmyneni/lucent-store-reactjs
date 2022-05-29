import { createContext, useContext, useReducer } from "react";
import { orderReducer } from "../reducers";

const OrderContext = createContext();
const useOrderContext = () => useContext(OrderContext);

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    orderDetails: [],
  });

  const value = { orderState, orderDispatch };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export { useOrderContext, OrderProvider };

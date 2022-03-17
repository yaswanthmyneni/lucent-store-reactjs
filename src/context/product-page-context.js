import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { productPageReducer } from "../reducers";

const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productPageReducer, {
    categoryName: {
      yogamats: false,
      pants: false,
      shirts: false,
    },
    sortBy: true,
    rating: 0,
    productList: [],
    loading:''
  });

  useEffect(() => {
    try {
      (async () => {
        dispatch({ type: "LOADING", payload: "Loading..."});
        const response = await axios.get("/api/products");
        dispatch({ type: "PRODUCT_LIST", payload: response.data.products });
        dispatch({ type: "LOADING", payload: ''});
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { useProductContext, ProductContextProvider };

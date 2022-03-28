import { createContext, useContext, useReducer, useEffect } from "react";
import { productPageReducer } from "../reducers";
import { apiCall } from "../utility";

const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  const [productPageState, productPageDispatch] = useReducer(
    productPageReducer,
    {
      categoryName: {
        yogamats: false,
        pants: false,
        shirts: false,
      },
      sortBy: true,
      rating: 0,
      productList: [],
      loading: "",
    }
  );

  useEffect(() => {
    try {
      (async () => {
        productPageDispatch({ type: "LOADING", payload: "Loading..." });
        const response = await apiCall("get", "/api/products");
        if (response.status === 200) {
          productPageDispatch({
            type: "PRODUCT_LIST",
            payload: response.data.products,
          });
          productPageDispatch({ type: "LOADING", payload: "" });
        }
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const value = {
    productPageState,
    productPageDispatch,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { useProductContext, ProductContextProvider };

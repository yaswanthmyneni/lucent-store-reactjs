import { createContext, useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);

const ProductContextProvider = ({ children }) => {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const data = await axios.get("/api/products");
        setProductList(data.data.products);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productsList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProductContext, ProductContextProvider };

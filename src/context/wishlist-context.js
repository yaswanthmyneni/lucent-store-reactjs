import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();
const useWishlistContext = () => useContext(WishlistContext);

const WishlistContextProvider = ({ children }) => {
  const [wishlists, setWishlists] = useState([]);

  return (
    <WishlistContext.Provider value={{ wishlists, setWishlists }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlistContext, WishlistContextProvider };

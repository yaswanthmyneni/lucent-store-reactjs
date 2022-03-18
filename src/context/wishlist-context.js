import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();
const useWishlistContext = () => useContext(WishlistContext);

const WishlistContextProvider = ({ children }) => {
  const [wishlists, setWishlists] = useState([]);

  const value = { wishlists, setWishlists };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlistContext, WishlistContextProvider };

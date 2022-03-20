import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();
const useWishlistContext = () => useContext(WishlistContext);

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const value = { wishlist, setWishlist };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlistContext, WishlistContextProvider };

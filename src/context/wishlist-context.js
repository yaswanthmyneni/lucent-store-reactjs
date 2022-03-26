import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WishlistContext = createContext();
const useWishlistContext = () => useContext(WishlistContext);

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    const wishlistLocalStorage = JSON.parse(localStorage.getItem("wishlist"));
    if (
      wishlist.length < 1 &&
      wishlistLocalStorage !== null &&
      wishlistLocalStorage.length >= 1
    ) {
      wishlistLocalStorage.map((item) => {
        return (async () => {
          const response = await axios({
            method: "post",
            url: `/api/user/wishlist`,
            headers: { authorization: encodedToken },
            data: {
              product: item,
            },
          });
          setWishlist(response.data.wishlist);
        })();
      });
    }
  }, [wishlist]);

  const value = { wishlist, setWishlist };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlistContext, WishlistContextProvider };

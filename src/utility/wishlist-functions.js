import { apiCall } from "./apiCall";

const addToWishlist = async (wishlist, setWishlist, item) => {
  try {
    const encodedToken = localStorage.getItem("token");
    if (wishlist.find((element) => element.id === item.id)) {
      console.log("already present");
    } else {
      const response = await apiCall(
        "post",
        `/api/user/wishlist`,
        encodedToken,
        item
      );
      setWishlist(response.data.wishlist);
    }
  } catch (error) {
    console.error(error);
  }
};

const removeFromWishlist = async (setWishlist, item) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await apiCall(
      "DELETE",
      `/api/user/wishlist/${item._id}`,
      encodedToken,
      item
    );
    setWishlist(response.data.wishlist);
  } catch (error) {
    console.error(error);
  }
};

export { addToWishlist, removeFromWishlist };

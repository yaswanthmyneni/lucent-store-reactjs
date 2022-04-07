import { apiCall } from "./api-call";
import { v4 as uuid } from "uuid";

const addToWishlist = async (
  wishlist,
  setWishlist,
  item,
  toastDispatch,
  navigate,
  location
) => {
  try {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      if (wishlist.find((element) => element.id === item.id)) {
        return toastDispatch({
          type: "ADD_TOAST",
          payload: {
            id: uuid(),
            className: "toast-warning",
            message: "already in the watchlater",
          },
        });
      }
      const response = await apiCall(
        "post",
        `/api/user/wishlist`,
        encodedToken,
        { product: item }
      );
      if (response.status === 201) {
        setWishlist(response.data.wishlist);
        toastDispatch({
          type: "ADD_TOAST",
          payload: {
            id: uuid(),
            className: "toast-success",
            message: "added to wishlist successfully",
          },
        });
      }
    } else {
      navigate("/signin", { state: { from: location } });
    }
  } catch (error) {
    console.error(error);
    toastDispatch({
      type: "ADD_TOAST",
      payload: {
        id: uuid(),
        className: "toast-error",
        message: "error! check console",
      },
    });
  }
};

const removeFromWishlist = async (setWishlist, item, toastDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await apiCall(
      "DELETE",
      `/api/user/wishlist/${item._id}`,
      encodedToken
    );
    if (response.status === 200) {
      setWishlist(response.data.wishlist);
      toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-success",
          message: "removed from wishlist successfully",
        },
      });
    }
  } catch (error) {
    console.error(error);
    toastDispatch({
      type: "ADD_TOAST",
      payload: {
        id: uuid(),
        className: "toast-error",
        message: "error in removing from wishlist",
      },
    });
  }
};

export { addToWishlist, removeFromWishlist };

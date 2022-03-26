import axios from "axios";

const addToWishlist = (wishlist, setWishlist, item) => {
  const encodedToken = localStorage.getItem("token");

  if (wishlist.find((element) => element.id === item.id)) {
    console.log("already present");
  } else {
    (async () => {
      const response = await axios({
        method: "post",
        url: "/api/user/wishlist",
        headers: { authorization: encodedToken },
        data: {
          product: item,
        },
      });
      localStorage.setItem("wishlist", JSON.stringify(response.data.wishlist));
      setWishlist(response.data.wishlist);
    })();
  }
};
const removeFromWishlist = (setWishlist, item) => {
  const encodedToken = localStorage.getItem("token");

  (async () => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${item._id}`,
      headers: { authorization: encodedToken },
    });
    localStorage.setItem("wishlist", JSON.stringify(response.data.wishlist));
    setWishlist(response.data.wishlist);
  })();
};

export { addToWishlist, removeFromWishlist };

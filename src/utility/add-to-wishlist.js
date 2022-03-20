const addToWishlist = (wishlist, setWishlist, item) => {
  if (wishlist.find((element) => element.id === item.id)) {
    setWishlist((prevWishlist) => prevWishlist);
  } else {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  }
};

export { addToWishlist };

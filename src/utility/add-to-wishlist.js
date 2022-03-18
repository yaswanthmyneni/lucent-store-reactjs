const addToWishlist = (wishlists, setWishlists, item) => {
  if (wishlists.find((element) => element.id === item.id)) {
    setWishlists((prevWishlist) => prevWishlist);
  } else {
    setWishlists((prevWishlist) => [...prevWishlist, item]);
  }
};

export { addToWishlist };

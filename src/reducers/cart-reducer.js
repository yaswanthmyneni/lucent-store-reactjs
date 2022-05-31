const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "SET_CART_LIST":
      return { ...cartState, cartList: action.payload };
    default:
      return cartState;
  }
};

export { cartReducer };

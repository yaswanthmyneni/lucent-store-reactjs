const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "cartList":
      return { ...cartState, cartList: action.payload };
    default:
      return cartState;
  }
};

export { cartReducer };

const addToCart = (cartList, dispatch, item) => {
  if (cartList.find((element) => element.id === item.id)) {
    dispatch({ type: "cartList", payload: cartList });
  } else {
    dispatch({
      type: "cartList",
      payload: [...cartList, item],
    });
  }
};

export { addToCart };

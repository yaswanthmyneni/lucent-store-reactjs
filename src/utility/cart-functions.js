import axios from "axios";

const addToCart = (cartList, dispatch, item) => {
  const encodedToken = localStorage.getItem("token");

  if (cartList.find((element) => element.id === item.id)) {
    console.log("already present");
  } else {
    (async () => {
      const response = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: encodedToken },
        data: {
          product: item,
        },
      });
      localStorage.setItem("cartList", JSON.stringify(response.data.cart));
      dispatch({
        type: "cartList",
        payload: response.data.cart,
      });
    })();
  }
};

const removeFromCart = (dispatch, item) => {
  const encodedToken = localStorage.getItem("token");

  (async () => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/cart/${item._id}`,
      headers: { authorization: encodedToken },
    });
    localStorage.setItem("cartList", JSON.stringify(response.data.cart));
    dispatch({
      type: "cartList",
      payload: response.data.cart,
    });
  })();
};

const incrementQytInCartList = (dispatch, id) => {
  const encodedToken = localStorage.getItem("token");

  (async () => {
    const response = await axios({
      method: "post",
      url: `/api/user/cart/${id}`,
      headers: { authorization: encodedToken },
      data: {
        action: {
          type: "increment",
        },
      },
    });
    localStorage.setItem("cartList", JSON.stringify(response.data.cart));
    dispatch({
      type: "cartList",
      payload: response.data.cart,
    });
  })();
};

const decrementQytInCartList = (dispatch, id, qty) => {
  const encodedToken = localStorage.getItem("token");

  if (qty === 1) {
    return console.log("no more decrements");
  }

  (async () => {
    const response = await axios({
      method: "post",
      url: `/api/user/cart/${id}`,
      headers: { authorization: encodedToken },
      data: {
        action: {
          type: "decrement",
        },
      },
    });
    localStorage.setItem("cartList", JSON.stringify(response.data.cart));
    dispatch({
      type: "cartList",
      payload: response.data.cart,
    });
  })();
};

export {
  addToCart,
  removeFromCart,
  incrementQytInCartList,
  decrementQytInCartList,
};

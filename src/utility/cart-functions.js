import { apiCall } from "./api-call";

const addToCart = async (cartList, dispatch, item) => {
  try {
    const encodedToken = localStorage.getItem("token");
    if (cartList.find((element) => element.id === item.id)) {
      console.log("already present");
    } else {
      const response = await apiCall("post", "/api/user/cart", encodedToken, {
        product: item,
      });
      dispatch({
        type: "cartList",
        payload: response.data.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const removeFromCart = async (dispatch, item) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await apiCall(
      "DELETE",
      `/api/user/cart/${item._id}`,
      encodedToken
    );
    dispatch({
      type: "cartList",
      payload: response.data.cart,
    });
  } catch (error) {
    console.error(error);
  }
};

const incrementQytInCartList = async (dispatch, id) => {
  try {
    const increment = {
      action: {
        type: "increment",
      },
    };
    const encodedToken = localStorage.getItem("token");
    const response = await apiCall(
      "post",
      `/api/user/cart/${id}`,
      encodedToken,
      increment
    );
    dispatch({
      type: "cartList",
      payload: response.data.cart,
    });
  } catch (error) {
    console.error(error);
  }
};

const decrementQytInCartList = async (dispatch, id, qty) => {
  try {
    const decrement = {
      action: {
        type: "decrement",
      },
    };
    const encodedToken = localStorage.getItem("token");
    if (qty > 1) {
      const response = await apiCall(
        "post",
        `/api/user/cart/${id}`,
        encodedToken,
        decrement
      );
      dispatch({
        type: "cartList",
        payload: response.data.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export {
  addToCart,
  removeFromCart,
  incrementQytInCartList,
  decrementQytInCartList,
};

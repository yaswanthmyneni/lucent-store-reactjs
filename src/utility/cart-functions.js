import { apiCall } from "./api-call";
import { v4 as uuid } from "uuid";

const addToCart = async (cartList, dispatch, item, toastDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    if (cartList.find((element) => element.id === item.id)) {
      toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-warning",
          message: "already in the cart",
        },
      });
    } else {
      const response = await apiCall("post", "/api/user/cart", encodedToken, {
        product: item,
      });
      dispatch({
        type: "cartList",
        payload: response.data.cart,
      });
      toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-success",
          message: "added to cart successfully",
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
        message: "error! check console",
      },
    });
  }
};

const removeFromCart = async (dispatch, item, toastDispatch) => {
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
    toastDispatch({
      type: "ADD_TOAST",
      payload: {
        id: uuid(),
        className: "toast-success",
        message: "removed from cart successfully",
      },
    });
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

const incrementQytInCartList = async (dispatch, id, toastDispatch) => {
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

const decrementQytInCartList = async (dispatch, id, qty, toastDispatch) => {
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

export {
  addToCart,
  removeFromCart,
  incrementQytInCartList,
  decrementQytInCartList,
};

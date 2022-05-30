import { apiCall } from "./api-call";
import { v4 as uuid } from "uuid";

const addToCart = async (
  cartList,
  dispatch,
  item,
  toastDispatch,
  navigate,
  location
) => {
  try {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      if (cartList.find((element) => element.id === item.id)) {
        return toastDispatch({
          type: "ADD_TOAST",
          payload: {
            id: uuid(),
            className: "toast-warning",
            message: "already in the cart",
          },
        });
      }
      const response = await apiCall("post", "/api/user/cart", encodedToken, {
        product: item,
      });
      if (response.status === 201) {
        dispatch({
          type: "SET_CART_LIST",
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

const removeFromCart = async (dispatch, item, toastDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await apiCall(
      "DELETE",
      `/api/user/cart/${item._id}`,
      encodedToken
    );
    if (response.status === 200) {
      dispatch({
        type: "SET_CART_LIST",
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

const deleteAllFromCart = async (dispatch, toastDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await apiCall("DELETE", `/api/user/cart/`, encodedToken);
    if (response.status === 200) {
      dispatch({
        type: "SET_CART_LIST",
        payload: response.data.cart,
      });
      toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-success",
          message: "removed all products from cart",
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
      type: "SET_CART_LIST",
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
        type: "SET_CART_LIST",
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
  deleteAllFromCart,
  incrementQytInCartList,
  decrementQytInCartList,
};

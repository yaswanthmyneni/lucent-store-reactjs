import axios from "axios";
import { apiCall } from "./apiCall";

const addToCart = async (cartList, dispatch, item) => {
  try {
    const encodedToken = localStorage.getItem("token");
    if (cartList.find((element) => element.id === item.id)) {
      console.log("already present");
    } else {
      const response = await apiCall("post", "/api/user/cart", encodedToken, item);
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
      encodedToken,
      item
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
    const encodedToken = localStorage.getItem("token");    
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
    const encodedToken = localStorage.getItem("token");
    if (qty === 1) {
      return console.log("no more decrements");
    }
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
    dispatch({
      type: "cartList",
      payload: response.data.cart,
    });
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

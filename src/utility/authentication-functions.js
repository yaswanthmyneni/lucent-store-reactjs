import { apiCall } from "./api-call";
import { v4 as uuid } from "uuid";

const submitSignInDetails = async (
  event,
  email,
  password,
  navigate,
  location,
  encodedToken,
  toastDispatch,
  authDispatch
) => {
  try {
    event.preventDefault();
    if (encodedToken) {
      return toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-warning",
          message: "already logged in",
        },
      });
    }
    const response = await apiCall("post", "/api/auth/login", null, {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({type:'USER', payload: response.data.foundUser});
      navigate(location?.state?.from?.pathname);
      toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-success",
          message: "logged in successfully",
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

const submitSignUpDetails = async (
  event,
  email,
  password,
  firstName,
  lastName,
  navigate,
  location,
  encodedToken,
  toastDispatch,
  authDispatch
) => {
  try {
    event.preventDefault();
    if (encodedToken) {
      return toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-warning",
          message: "already logged in",
        },
      });
    }
    const response = await apiCall("post", "/api/auth/signup", null, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    if (response.status === 201) {
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({type:'USER', payload: response.data.createdUser});
      navigate(location?.state?.from?.pathname);
      toastDispatch({
        type: "ADD_TOAST",
        payload: {
          id: uuid(),
          className: "toast-success",
          message: "signed up successfully",
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

export { submitSignInDetails, submitSignUpDetails };

import { apiCall } from "./api-call";

const submitSignInDetails = async (
  event,
  email,
  password,
  navigate,
  encodedToken
) => {
  try {
    event.preventDefault();
    if (encodedToken) {
      return console.log("already logged in");
    }
    const response = await apiCall("post", "/api/auth/login", null, {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/products");
    }
  } catch (error) {
    console.error(error);
  }
};

const submitSignUpDetails = async (
  event,
  email,
  password,
  firstName,
  lastName,
  navigate,
  encodedToken
) => {
  try {
    event.preventDefault();
    if (encodedToken) {
      return console.log("already logged in");
    }
    const response = await apiCall("post", "/api/auth/signup", null, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    if (response.status === 201) {
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/products");
    }
  } catch (error) {
    console.error(error);
  }
};

export { submitSignInDetails, submitSignUpDetails };

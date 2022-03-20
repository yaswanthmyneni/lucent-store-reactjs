import axios from "axios";

const submitSignInDetails = async (event, email, password, navigate) => {
  try {
    event.preventDefault();
    const response = await axios.post("/api/auth/login", {
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
  navigate
) => {
  try {
    event.preventDefault();
    const response = await axios.post("/api/auth/signup", {
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

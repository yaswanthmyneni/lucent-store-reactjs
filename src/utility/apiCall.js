import axios from "axios";
const apiCall = async (method, url, encodedToken, item) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      headers: { authorization: encodedToken },
      data: {
        product: item,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { apiCall };

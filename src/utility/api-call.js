import axios from "axios";
const apiCall = async (method, url, encodedToken, body) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      headers: { authorization: encodedToken },
      data: body,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { apiCall };

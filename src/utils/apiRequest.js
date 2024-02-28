import axios from "axios";
import { SERVER_URL } from "../constants";

const apiRequest = async (method, path, payload = {}, disconnectUser) => {
  try {
    const { data } = await axios({
      method,
      url: SERVER_URL + path,
      headers: {
        "Client-Type": "web",
      },
      withCredentials: true,
      data: payload,
    });
    return data;
  } catch (err) {
    if(disconnectUser && err.response.status === 401 && err.response.data.detail.Error == "Access token not found"){
      disconnectUser()
      alert("You are not connected to an account!")
    }
    throw err;
  }
};

export default apiRequest;

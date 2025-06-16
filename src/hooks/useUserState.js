import { useEffect, useState } from "react";
import apiRequest from "../utils/apiRequest";

const useUserState = () => {
  const [userState, setUserState] = useState("none");
  const fetchData = async () => {
    try {
      const data = await apiRequest("get", "/users/is-logged-in");

      connectUser(data.role);
    } catch (err) {
    }
  };

  // Check if the user is connected
  useEffect(() => {
    fetchData();
  }, []);

  const connectUser = (role) => {
    setUserState(role);
  };

  const disconnectUser = async () => {
    try {
      await apiRequest("post", "/users/logout");
      setUserState("none");
    } catch (err) {
      console.log(err);
    }
  };

  return { userState, connectUser, disconnectUser };
};

export default useUserState;

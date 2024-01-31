import axios from "axios";
import { useEffect, useState } from "react";

const useConnected = () => {
  const [isConnected, setIsConnected] = useState(false);

  // Check if the user is connected
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios({
          method: "get",
          url: "http://127.0.0.1:8000/users/is-logged-in",
          headers: {
            "Client-Type": "web",
          },
          withCredentials: true,
        });
        setIsConnected(response.data.answer);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const connectUser = () =>{
    setIsConnected(true)
  }

  const disconnectUser = async () => {
    try {
      await axios({
        method: "post",
        url: "http://127.0.0.1:8000/users/logout",
        headers: {
          "Client-Type": "web",
        },
        withCredentials: true,
      });
      setIsConnected(false)
    } catch (err) {
      console.log(err);
    }
  };
  
  return { isConnected, connectUser, disconnectUser };
};

export default useConnected;

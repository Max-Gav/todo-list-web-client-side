import { useState } from "react";
import axios from "axios";
import { validateEmail, validateLoginPassword } from "../utils/inputFilters";

const useLogin = (handleClose, connectUser) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorField, setErrorField] = useState(null);
  const [errorText, setErrorText] = useState(null);

  const onLogin = async () => {
    if (
      validateEmail(email, setErrorField, setErrorText) &&
      validateLoginPassword(password, setErrorField, setErrorText)
    ) {
      try {
        await axios({
          method: "post",
          url: "http://127.0.0.1:8000/users/login",
          headers: {
            "Client-Type": "web",
          },
          data: {
            email: email,
            password: btoa(password),
          },
          withCredentials: true,
        });
        connectUser();
        handleClose();
      } catch (err) {
        console.log(err);
        const errorMessage = err.response.data.detail.Error;
        switch (errorMessage) {
          case "No matching email":
            setErrorText(errorMessage);
            setErrorField("email");
            break;
          case "Incorrect Password":
            setErrorText(errorMessage);
            setErrorField("password");
            break;
          default:
            break;
        }
      }
    }
  };

  return { setEmail, setPassword, errorField, errorText, onLogin };
};

export default useLogin;

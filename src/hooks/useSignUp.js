import { useState } from "react";
import axios from "axios";
import {
  validateUserName,
  validateEmail,
  validateSignUpPassword,
} from "../utils/inputFilters";

const useSignUp = (handleClose,connectUser) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorField, setErrorField] = useState(null);
  const [errorText, setErrorText] = useState(null);

  const onSignUp = async () => {
    if (
      validateUserName(username, setErrorField, setErrorText) == true &&
      validateEmail(email, setErrorField, setErrorText) &&
      validateSignUpPassword(password, setErrorField, setErrorText) == true
    ) {
      try {
        await axios({
          method: "post",
          url: "http://127.0.0.1:8000/users/signup",
          headers: {
            "Client-Type": "web",
          },
          data: {
            username: username,
            email: email,
            password: btoa(password),
          },
          withCredentials: true,
        });
        connectUser()
        handleClose();
      } catch (err) {
        const errorMessage = err.response.data.detail.Error;

        switch (errorMessage) {
          case "User's email already exists":
            setErrorField("email");
            setErrorText(errorMessage);
            break;
          default:
            break;
        }
      }
    }
  };

  return {
    setUserName,
    setEmail,
    setPassword,
    errorField,
    errorText,
    onSignUp,
  };
};

export default useSignUp;

import { useState } from "react";
import {
  setErrorDetails,
  validateEmail,
  validateSignUpPassword,
  validateUserName,
} from "../utils/inputFilters";
import apiRequest from "../utils/apiRequest";

const useSignUp = (handleClose, connectUser) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorField, setErrorField] = useState(null);
  const [errorText, setErrorText] = useState(null);

  const onSignUp = async () => {
    const usernameErrorDetails = validateUserName(username);
    if (setErrorDetails(usernameErrorDetails, setErrorField, setErrorText)) {
      return;
    }
    const emailErrorDetails = validateEmail(email);
    if (setErrorDetails(emailErrorDetails, setErrorField, setErrorText)) {
      return;
    }

    const passwordErrorDetails = validateSignUpPassword(password);
    if (setErrorDetails(passwordErrorDetails, setErrorField, setErrorText)) {
      return;
    }
    try {
      const signupPayload = {
        username: username,
        email: email,
        password: btoa(password),
      };

      await apiRequest("post", "/users/signup", signupPayload);
      connectUser("user");
      handleClose();
    } catch (err) {
      console.log(err);
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

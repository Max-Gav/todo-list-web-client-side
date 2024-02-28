import { useState } from "react";
import apiRequest from "../utils/apiRequest";
import { setErrorDetails, validateEmail, validateLoginPassword } from "../utils/inputFilters";

const useLogin = (handleClose, connectUser) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorField, setErrorField] = useState(null);
  const [errorText, setErrorText] = useState(null);

  const onLogin = async () => {
    const emailErrorDetails = validateEmail(email);
    if (setErrorDetails(emailErrorDetails, setErrorField, setErrorText)) {
      return;
    }

    const passwordErrorDetails = validateLoginPassword(password);
    if (setErrorDetails(passwordErrorDetails, setErrorField, setErrorText)) {
      return;
    }

    try {
      const loginPayload = { email: email, password: btoa(password) };
      const response = await apiRequest("post", "/users/login", loginPayload);

      connectUser(response.role);
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
  };

  return { setEmail, setPassword, errorField, errorText, onLogin };
};

export default useLogin;

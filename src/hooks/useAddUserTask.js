import { useState } from "react";
import {
  setErrorDetails,
  validateEmail,
  validateTaskMessage,
} from "../utils/inputFilters";

const useCreateTask = (handleClose, onAddTask) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorField, setErrorField] = useState(null);
  const [errorText, setErrorText] = useState(null);

  const onCreateTask = async () => {
    const emailErrorDetails = validateEmail(email);
    if (setErrorDetails(emailErrorDetails, setErrorField, setErrorText)) {
      return;
    }

    const messageErrorDetails = validateTaskMessage(message);
    if(setErrorDetails(messageErrorDetails, setErrorField, setErrorText)) {
       return;
    }

    try {
      await onAddTask(message, email);

      handleClose();
    } catch (err) {
      const errorMessage = err.response.data.detail.Error;
      switch (errorMessage) {
        case "User not found":
          setErrorText(errorMessage);
          setErrorField("email");
          break;
        default:
          break;
      }
    }
  };

  return { setEmail, setMessage, errorField, errorText, onCreateTask };
};

export default useCreateTask;

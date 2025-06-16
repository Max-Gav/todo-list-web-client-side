import { Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  setErrorDetails,
  validateTaskMessage,
} from "../../../utils/inputFilters";

const AddTaskBar = ({ onAddTask }) => {
  const [message, setMessage] = useState("");
  const [errorField, setErrorField] = useState(null);
  const [errorText, setErrorText] = useState(null);

  return (
    <TextField
      error={errorField == "message"}
      helperText={errorField == "message" && errorText}
      fullWidth
      label="Add Task"
      variant="outlined"
      margin="normal"
      component={Paper}
      onChange={(event) => {
        setMessage(event.target.value);
      }}
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          const messageErrorDetails = validateTaskMessage(message);
          if (
            setErrorDetails(messageErrorDetails, setErrorField, setErrorText)
          ) {
            return;
          }

          try {
            onAddTask(message);
          } catch (error) {
            console.log(error);
          }
        }
      }}
    />
  );
};

export default AddTaskBar;

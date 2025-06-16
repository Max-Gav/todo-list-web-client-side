import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { OverlayContext, TasksContext } from "../../../AppContext";
import useCreateTask from "../../../hooks/useAddUserTask";

const AddTaskDialog = () => {
  const { handleClose } = useContext(OverlayContext);

  const { onAddTask } = useContext(TasksContext);

  const { setEmail, setMessage, errorField, errorText, onCreateTask } =
    useCreateTask(handleClose, onAddTask);
  return (
    <>
      <DialogTitle sx={{ fontWeight: "bold" }}>Add Task to User</DialogTitle>
      <DialogContent>
        <TextField
          error={errorField == "email"}
          helperText={errorField == "email" && errorText}
          required
          margin="dense"
          name="email"
          label="User email"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          error={errorField == "message"}
          helperText={errorField == "message" && errorText}
          required
          margin="dense"
          name="message"
          label="Task message"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={onCreateTask}>
          Add
        </Button>
      </DialogActions>
    </>
  );
};

export default AddTaskDialog;

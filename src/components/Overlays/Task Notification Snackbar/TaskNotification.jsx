import { Snackbar } from "@mui/material";
import React, { useContext } from "react";
import { OverlayContext } from "../../../AppContext";
import TaskNotificationButtons from './TaskNotificationButtons';

const TaskNotification = () => {
  const { isOpen, props, handleClose } = useContext(OverlayContext);

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      message={"Task: " + props.message}
      action={<TaskNotificationButtons onClose={handleClose} taskId={props.taskId}/>}
    ></Snackbar>
  );
};

export default TaskNotification;

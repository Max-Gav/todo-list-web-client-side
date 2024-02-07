import { Dialog } from "@mui/material";
import React, { useContext } from "react";
import { OverlayContext } from "../../AppContext";
import CreateTaskDialog from "./Add Task Dialog/AddTaskDialog";
import LoginDialog from "./Login Dialog/LoginDialog";
import SignUpDialog from "./Sign Up Dialog/SignUpDialog";
import TaskNotification from "./Task Notification Snackbar/TaskNotification";
import SetNotificationDialog from "./Set Notification Dialog/SetNotificationDialog";

const OverlayHandler = ({}) => {
  const { isOpen, currentOverlay, handleClose } = useContext(OverlayContext);

  return (
    <>
      {currentOverlay !== "notification" ? (
        <Dialog open={isOpen} maxWidth={"sm"} fullWidth onClose={handleClose}>
          {currentOverlay === "signup" && <SignUpDialog />}
          {currentOverlay === "login" && <LoginDialog />}
          {currentOverlay === "additem" && <CreateTaskDialog />}
          {currentOverlay === "setnotification" && <SetNotificationDialog />}
        </Dialog>
      ) : (
        <TaskNotification/>
      )}
    </>
  );
};

export default OverlayHandler;

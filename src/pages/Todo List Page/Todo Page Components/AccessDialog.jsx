import { Dialog } from "@mui/material";
import React, { useContext } from "react";
import SignUpDialog from "../../../components/Sign Up Dialog/SignUpDialog";
import LoginDialog from "../../../components/Login Dialog/LoginDialog";
import { DialogContext } from "../../../AppContext";

const AccessDialog = ({}) => {
  const {
    isOpen,
    currentDialog,
    handleClose,
  } = useContext(DialogContext);

  return (
    <Dialog open={isOpen} maxWidth={"sm"} fullWidth onClose={handleClose}>
      {currentDialog === "signup" ? (
        <SignUpDialog/>
      ) : (
        <LoginDialog />
      )}
    </Dialog>
  );
};

export default AccessDialog;

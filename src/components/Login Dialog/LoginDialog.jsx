import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  TextField,
  Box,
} from "@mui/material";
import React, { useContext } from "react";
import useLogin from "../../hooks/useLogin";
import { DialogContext, IsConnectedContext } from "../../AppContext";

const LoginDialog = ({onClose, onChangeDialog }) => {
  const {
    openSignUpDialog,
    handleClose,
  } = useContext(DialogContext);

  const {connectUser} = useContext(IsConnectedContext)

  const { setEmail, setPassword, errorField, errorText, onLogin } = useLogin(handleClose, connectUser);

  return (
    <>
      <DialogTitle sx={{ fontWeight: "bold" }}>
        Login to your account
      </DialogTitle>
      <DialogContent>
        <TextField
          error={errorField == "email"}
          autoFocus
          required
          margin="dense"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          helperText={errorField == "email" && errorText}
        />
        <TextField
          error={errorField == "password"}
          required
          margin="dense"
          name="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          helperText={errorField == "password" && errorText}
        />
        <Box mt={"10px"}>
          <Link color="primary" onClick={openSignUpDialog}>
            Create an account
          </Link>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={onLogin}>
          Login
        </Button>
      </DialogActions>
    </>
  );
};

export default LoginDialog;

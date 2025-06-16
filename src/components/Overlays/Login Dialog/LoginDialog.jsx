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
import useLogin from "../../../hooks/useLogin";
import { OverlayContext, UserStateContext } from "../../../AppContext";

const LoginDialog = () => {
  const {
    openOverlay,
    handleClose,
  } = useContext(OverlayContext);

  const {connectUser} = useContext(UserStateContext)

  const { setEmail, setPassword, errorField, errorText, onLogin } = useLogin(handleClose, connectUser);

  return (
    <>
      <DialogTitle sx={{ fontWeight: "bold" }}>
        Login to your account
      </DialogTitle>
      <DialogContent>
        <TextField
          error={errorField == "email"}
          helperText={errorField == "email" && errorText}
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
        />
        <TextField
          error={errorField == "password"}
          helperText={errorField == "password" && errorText}
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
        />
        <Box mt={"10px"}>
          <Link color="primary" onClick={()=>{openOverlay("signup")}}>
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

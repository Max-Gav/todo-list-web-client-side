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
import useSignUp from "../../hooks/useSignUp";
import { DialogContext, IsConnectedContext } from "../../AppContext";

const SignUpDialog = () => {
  const {
    openLoginDialog,
    handleClose,
  } = useContext(DialogContext);

  const {connectUser} = useContext(IsConnectedContext)

  const {
    setUserName,
    setEmail,
    setPassword,
    errorField,
    errorText,
    onSignUp
  } = useSignUp(handleClose, connectUser);

  return (
    <>
      <DialogTitle sx={{ fontWeight: "bold" }}>Sign up</DialogTitle>
      <DialogContent>
        <TextField
          error={errorField == "username"}
          required
          margin="dense"
          name="username"
          label="Username"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          helperText={errorField == "username" && errorText}
        />
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
          <Link color="primary" onClick={openLoginDialog}>
            Login to existing user
          </Link>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={onSignUp}
        >
          Sign up
        </Button>
      </DialogActions>
    </>
  );
};

export default SignUpDialog;

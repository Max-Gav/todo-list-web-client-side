import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { OverlayContext, UserStateContext } from "../../../AppContext";
import useSignUp from "../../../hooks/useSignUp";

const SignUpDialog = () => {
  const {
    openDialog,
    handleClose,
  } = useContext(OverlayContext);

  const {connectUser} = useContext(UserStateContext)

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
          helperText={errorField == "username" && errorText}
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
        />
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
          <Link color="primary" onClick={()=>{openDialog("login")}}>
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

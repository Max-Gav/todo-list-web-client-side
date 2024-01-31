import { Button, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { DialogContext, IsConnectedContext } from "../../../AppContext";

const NavigationBarButtons = () => {
  const { isConnected, disconnectUser } = useContext(IsConnectedContext);

  const { openLoginDialog, openSignUpDialog } = useContext(DialogContext);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        justifyContent: { xs: "center", sm: "end" },
        my: 1,
        display: "flex",
        gap: 2,
      }}
    >
      {isConnected ? (
        <>
          <Button
            variant="contained"
            sx={{backgroundColor:"gray"}}
            startIcon={<LogoutIcon />}
            onClick={disconnectUser}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            color="success"
            startIcon={<PersonAddIcon />}
            onClick={openSignUpDialog}
          >
            Sign up
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<LoginIcon />}
            onClick={openLoginDialog}
          >
            Login
          </Button>
        </>
      )}
    </Grid>
  );
};

export default NavigationBarButtons;

import { Button, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { OverlayContext, UserStateContext } from "../../../AppContext";

const NavigationBarButtons = () => {
  const { userState, disconnectUser } = useContext(UserStateContext);

  const { openOverlay } = useContext(OverlayContext);

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
      {userState != "none" ? (
        <>
          <Button
            variant="contained"
            color="error"
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
            onClick={()=>{openOverlay("signup")}}
          >
            Sign up
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<LoginIcon />}
            onClick={()=>{openOverlay("login")}}
          >
            Login
          </Button>
        </>
      )}
    </Grid>
  );
};

export default NavigationBarButtons;

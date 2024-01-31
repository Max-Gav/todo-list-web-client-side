import { AppBar, Container, Grid, Toolbar } from "@mui/material";
import React from "react";
import NavigationBarButtons from "./Navigation Bar Components/NavigationBarButtons";
import NavigationBarLogo from "./Navigation Bar Components/NavigationBarLogo";

const NavigationBar = () => {

  return (
    <AppBar position="static" sx={{ backgroundColor: "#3c3c3c" }}>
      <Toolbar>
        <Container maxWidth={"xl"}>
          <Grid container>
            <NavigationBarLogo />
            <NavigationBarButtons/>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

import { Button, Grid } from "@mui/material";
import React from "react";

const HeaderButton = ({ text, onClick, color }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Button variant="contained" color={color?color:"primary"} size="small" sx={{ width: "200px", fontSize:"0.8em" }} onClick={onClick}>
        {text}
      </Button>
    </Grid>
  );
};

export default HeaderButton;

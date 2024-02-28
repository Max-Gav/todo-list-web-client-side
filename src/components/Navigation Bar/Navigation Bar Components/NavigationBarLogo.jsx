import React from "react";
import { Grid, Typography } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const NavigationBarLogo = () => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      justifyContent={{ xs: "center", sm: "start" }}
      sx={{display: "flex" }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
      >
        <ReceiptLongIcon sx={{ marginRight: 1 }} />
        Todo List
      </Typography>
    </Grid>
  );
};

export default NavigationBarLogo;

import React from "react";
import NavigationBar from "../../components/Navigation Bar/NavigationBar";
import { Grid, TextField, Container, Paper, Box } from "@mui/material";
import AccessDialog from "./Todo Page Components/AccessDialog";

const TodoPage = () => {

  return (
    <Box>
      <NavigationBar
      />
      <AccessDialog />
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Grid item xs={9} md={6}>
            <TextField
              fullWidth
              label="Enter Task"
              variant="outlined"
              margin="normal"
              component={Paper}
            />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default TodoPage;

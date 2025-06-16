import { Box, Container } from "@mui/material";
import React, { useContext } from "react";
import { UserStateContext } from "../../AppContext";
import NavigationBar from "../../components/Navigation Bar/NavigationBar";
import OverlayHandler from "../../components/Overlays/OverlayHandler";
import TaskTable from "../../components/Task Table/TaskTable";

const TodoPage = () => {
  const { userState } = useContext(UserStateContext);
  return (
    <Box>
      <NavigationBar />
      <OverlayHandler />
      {userState != "none" && (
        <Container maxWidth="lg">
          <TaskTable />
        </Container>
      )}
    </Box>
  );
};

export default TodoPage;

import { Box, Grid, Typography } from "@mui/material";
import HeaderButton from "./HeaderButton";
import { useContext } from "react";
import { OverlayContext } from "../../../AppContext";

const TaskTableHeader = ({
  onClearCompleted,
  onFilterTasks,
  userState,
  tasksLeft,
}) => {
  const { openOverlay } = useContext(OverlayContext);

  return (
    <Box borderBottom={"1px solid gray"} p={1}>
      <Grid container justifyContent={"center"} gap={3} columns={22}>
        <HeaderButton
          text={"All"}
          onClick={() => {
            onFilterTasks();
          }}
          color={"secondary"}
        />

        <HeaderButton
          text={"Clear Completed"}
          onClick={onClearCompleted}
          color={"error"}
        />
        {userState === "admin" && (
          <HeaderButton
            text={"Add task to user"}
            onClick={() => {
              openOverlay("additem");
            }}
            color={"success"}
          />
        )}
        <HeaderButton
          text={"Not Started"}
          onClick={() => {
            onFilterTasks("Not Started");
          }}
        />
        <HeaderButton
          text={"In Progress"}
          onClick={() => {
            onFilterTasks("In Progress");
          }}
        />
        <HeaderButton
          text={"Completed"}
          onClick={() => {
            onFilterTasks("Completed");
          }}
          color={"info"}
        />
      </Grid>
      <Typography sx={{ fontWeight: "bold", mt:"10px" }}>
        Tasks left to complete: {tasksLeft}
      </Typography>
    </Box>
  );
};

export default TaskTableHeader;

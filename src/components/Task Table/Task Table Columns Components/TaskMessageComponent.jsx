import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Snackbar, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { OverlayContext } from "../../../AppContext";

const TaskMessageComponent = ({
  message,
  taskId,
  taskStatus,
  onDeleteTask,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const { openOverlay } = useContext(OverlayContext);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const textLine = taskStatus == "Completed" ? "line-through" : "none";

  return (
    <Box
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Typography
        width={"70%"}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        sx={{ textDecoration: textLine }}
      >
        {message}
      </Typography>
      {isHovering && (
        <Box
          sx={{
            width: "25%",
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <IconButton
            onClick={() => {
              openOverlay("setnotification", { taskId, message });
            }}
          >
            <AccessAlarmIcon></AccessAlarmIcon>
          </IconButton>
          <IconButton
            onClick={() => {
              onDeleteTask({ taskId });
            }}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default TaskMessageComponent;

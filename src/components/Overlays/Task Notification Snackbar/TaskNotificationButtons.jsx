import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { TasksContext } from '../../../AppContext';

const TaskNotificationButtons = ({onClose,taskId}) => {
  const {onTaskUpdate} = useContext(TasksContext)
  
    const onMarkDone = () =>{
      onTaskUpdate({
        taskId: taskId,
        status: "Completed",
      });
      onClose()
    }
  return (
    <>
    <Button color="success" sx={{color:"lightgreen"}} size="small" onClick={onMarkDone}>
      Mark as Done
    </Button>
    <IconButton
      size="small"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </>
  )
}

export default TaskNotificationButtons
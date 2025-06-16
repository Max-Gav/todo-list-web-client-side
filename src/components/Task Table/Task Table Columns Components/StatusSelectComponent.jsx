import {
    FormControl,
    MenuItem,
    Select
} from "@mui/material";
import { useEffect, useState } from "react";
import {
    STATUS_COMPLETED,
    STATUS_IN_PROGREES,
    STATUS_NOT_STARTED,
} from "../../../constants";
  
const StatusSelectComponent = ({ initialStatus, taskId, onStatusUpdate }) => {
    const [status, setStatus] = useState(initialStatus);

    useEffect(()=>{setStatus(initialStatus)},[initialStatus])
    return (
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Age"
          fullWidth
          disableUnderline={true}
          variant="standard"
          onChange={(event) => {
            const newStatus = event.target.value;
  
            setStatus(newStatus);
            onStatusUpdate({
              taskId: taskId,
              status: newStatus,
            });
          }}
        >
          <MenuItem value={STATUS_NOT_STARTED}>{STATUS_NOT_STARTED}</MenuItem>
          <MenuItem value={STATUS_IN_PROGREES}>{STATUS_IN_PROGREES}</MenuItem>
          <MenuItem value={STATUS_COMPLETED}>{STATUS_COMPLETED}</MenuItem>
        </Select>
      </FormControl>
    );
  };

export default StatusSelectComponent
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useContext } from "react";
import { OverlayContext } from "../../../AppContext";
import useSetNotification from "../../../hooks/useSetNotification";

const SetNotificationDialog = () => {
  const { openOverlay, handleClose, props } = useContext(OverlayContext);
  const {setNotificationTime, inputError, createNotification} = useSetNotification(openOverlay, handleClose)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
        Add Notification
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography sx={{ fontSize: "1.6em", textAlign: "center" }}>
          Task: {props.message}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Notification Time"
            defaultValue={dayjs()}
            slotProps={{
              textField: {
                error: inputError != null,
                helperText: inputError,
              },
            }}
            onChange={(time) => {
              if (time != null) {
                setNotificationTime(time.toDate() - Date.now());
              }
            }}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="large"
          color="error"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={() => {
            createNotification(props);
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Box>
  );
};

export default SetNotificationDialog;

import { useEffect, useRef, useState } from "react";
import apiRequest from "../utils/apiRequest";
import WebWorker from "../web workers/WebWorker";
import alertWorker from "../web workers/alert.worker";

const useSetNotification = (openOverlay, handleClose) => {
  const [notificationTime, setNotificationTime] = useState(0);
  const [inputError, setInputError] = useState(null);
  const worker = useRef(null);

  useEffect(() => {
    worker.current = new WebWorker(alertWorker);

    worker.current.addEventListener("message", async (event) => {
      const taskId = event.data.taskId;
      const result = await apiRequest("post", "/tasks/notification-eligible", {
        taskId,
      });
      if (result.answer) {
        openOverlay("notification", {
          taskId,
          message: event.data.message,
        });
      }
    });
  }, []);

  const createNotification = (props) => {
    if (notificationTime > 0) {
      setInputError(null);
      worker.current.postMessage({ ...props, notificationTime});
      handleClose();
    } else {
      setInputError("Enter a time in the future!");
    }
  };

  return { setNotificationTime, inputError, createNotification };
};

export default useSetNotification;

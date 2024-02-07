import { useEffect, useRef, useState } from "react";
import apiRequest from "../utils/apiRequest";

const removeCompleted = (tasks) => {
  return tasks.filter((task) => task.status != "Completed");
};

const useTasks = (userState, disconnectUser) => {
  const [tasks, setTasks] = useState([]);
  const [tableTasks, setTableTasks] = useState([]);
  const [tasksLeft, setTasksLeft] = useState(0);
  const currentFilter = useRef("none");

  // Sync the tasks list with the current user
  useEffect(() => {
    onGetTasks();
  }, [userState]);

  // Sync the tasks list with the table tasks list
  useEffect(() => {
    onFilterTasks(currentFilter.current);
  }, [tasks]);

  // Sync the tasks left counter with the table tasks
  useEffect(() => {
    onUpdateTasksLeft();
  }, [tableTasks]);

  const onGetTasks = async () => {
    try {
      const data = await apiRequest("get", "/tasks/get",);
      setTasks(data);
      setTableTasks(data);
    } catch (err) {
    }
  };

  const onAddTask = async (message, userEmail = null) => {
    try {
      const addTaskPayload = { message };
      if (userEmail != null) {
        addTaskPayload.userEmail = userEmail;
      }
      const data = await apiRequest("post", "/tasks/add", addTaskPayload, disconnectUser);
      setTasks((prev) => [...prev, data.task]);
    } catch (err) {
      throw err;
    }
  };

  const onTaskUpdate = async (updateTaskPayload) => {
    try {
      await apiRequest("patch", "/tasks/update", updateTaskPayload, disconnectUser);

      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          const newTask =
            task._id === updateTaskPayload.taskId
              ? { ...task, ...updateTaskPayload }
              : task;
          delete newTask.taskId;
          return newTask;
        });
      });
    } catch (err) {}
  };

  const onClearCompleted = async () => {
    try {
      await apiRequest("delete", "/tasks/delete-completed", undefined, disconnectUser);

      setTasks((prev) => {
        return removeCompleted(prev);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onDeleteTask = async (deleteTaskPayload) => {
    try {
      await apiRequest("delete", "/tasks/delete", deleteTaskPayload, disconnectUser);

      setTasks((prev) => {
        return prev.filter((task) => task._id != deleteTaskPayload.taskId);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onFilterTasks = (status = "none") => {
    if (status != "none") {
      setTableTasks(tasks.filter((task) => task.status == status));
    } else {
      setTableTasks([...tasks]);
    }
    currentFilter.current = status;
  };

  const onUpdateTasksLeft = () => {
    setTasksLeft(removeCompleted(tableTasks).length);
  };

  return {
    tableTasks,
    tasksLeft,
    onTaskUpdate,
    onClearCompleted,
    onAddTask,
    onGetTasks,
    onFilterTasks,
    onDeleteTask,
  };
};

export default useTasks;

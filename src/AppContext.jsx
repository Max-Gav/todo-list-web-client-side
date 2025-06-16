import React, { createContext } from "react";
import App from "./App";
import useOverlay from "./hooks/useOverlay";
import useTasks from "./hooks/useTasks";
import useUserState from "./hooks/useUserState";

export const TasksContext = createContext(null);
export const UserStateContext = createContext(null);
export const OverlayContext = createContext(null);

const AppContext = () => {
  // User State
  const { userState, connectUser, disconnectUser } = useUserState();

  // Overlay
  const { isOpen, props,currentOverlay, openOverlay, handleClose } = useOverlay();

  // Tasks
  const {
    tableTasks,
    tasksLeft,
    onTaskUpdate,
    onClearCompleted,
    onAddTask,
    onFilterTasks,
    onDeleteTask,
  } = useTasks(userState, disconnectUser);

  return (
    <UserStateContext.Provider
      value={{ userState, connectUser, disconnectUser }}
    >
      <TasksContext.Provider
        value={userState == "none" ? null : {
          tableTasks,
          tasksLeft,
          onTaskUpdate,
          onClearCompleted,
          onAddTask,
          onFilterTasks,
          onDeleteTask,
        }}
      >
        <OverlayContext.Provider
          value={{ isOpen, props, currentOverlay, openOverlay, handleClose }}
        >
          <App />
        </OverlayContext.Provider>
      </TasksContext.Provider>
    </UserStateContext.Provider>
  );
};

export default AppContext;

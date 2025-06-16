import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { TasksContext, UserStateContext } from "../../AppContext";
import AddTaskBar from "./Task Table Components/AddTaskBar";
import TaskTableHeader from "./Task Table Components/TaskTableHeader";
import { getColumns } from "./TaskTableColumns";
import { validateTaskMessage } from "../../utils/inputFilters";

const TaskTable = () => {
  const {
    tableTasks,
    tasksLeft,
    onTaskUpdate,
    onClearCompleted,
    onAddTask,
    onFilterTasks,
    onDeleteTask,
  } = useContext(TasksContext);

  const { userState } = useContext(UserStateContext);

  const handleProcessRowUpdate = (updatedRow, originalRow) => {
    const messageErrorDetails = validateTaskMessage(updatedRow.message);
    if (messageErrorDetails.errorField != null) {
      alert(messageErrorDetails.errorText)
      return originalRow;
    }

    onTaskUpdate({
      taskId: updatedRow._id,
      message: updatedRow.message,
      status: updatedRow.status,
    });

    return updatedRow;
  };

  const handleProcessRowUpdateError = (err) => {
    console.log(err);
  };

  return (
    <>
      <AddTaskBar onAddTask={onAddTask} />
      <DataGrid
        rows={tableTasks ? tableTasks : []}
        columns={getColumns(userState, onTaskUpdate, onDeleteTask)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          sorting: {
            sortModel: [{ field: "created_at", sort: "desc" }],
          },
        }}
        pageSizeOptions={[5,10,20]}
        getRowId={(row) => row._id}
        disableRowSelectionOnClick
        disableColumnMenu={userState != "admin"}
        slots={{ toolbar: TaskTableHeader }}
        slotProps={{
          toolbar: {
            onClearCompleted,
            onFilterTasks,
            userState,
            tasksLeft,
          },
        }}
        showCellVerticalBorder
        showColumnVerticalBorder
        autoHeight
        processRowUpdate={handleProcessRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />
    </>
  );
};

export default TaskTable;

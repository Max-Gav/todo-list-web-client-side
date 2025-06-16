import { GridCellModes } from "@mui/x-data-grid";
import StatusSelectComponent from "./Task Table Columns Components/StatusSelectComponent";
import TaskMessageComponent from "./Task Table Columns Components/TaskMessageComponent";

// Status Selection Component

export const getColumns = (userState, onTaskUpdate, onDeleteTask) => {
  let defaultColumns = [
    {
      field: "message",
      headerName: "Task Message",
      flex: 10,
      editable: true,
      mode: GridCellModes.Edit,
      hideable: false,
      renderCell: (params) => {
        return (
          <TaskMessageComponent
            message={params.formattedValue}
            taskId={params.row._id}
            taskStatus={params.row.status}
            onDeleteTask={onDeleteTask}
          />
        );
      },
    },
    {
      field: "status",
      headerName: "Task Status",
      flex: 5,
      hideable: false,
      renderCell: (params) => {
        return (
          <StatusSelectComponent
            initialStatus={params.value}
            taskId={params.id}
            onStatusUpdate={onTaskUpdate}
          />
        );
      },
    },
  ];

  const adminColumns = [
    {
      field: "created_at",
      headerName: "Date Created",
      flex: 5,
      hideable: false,
    },
    {
      field: "username",
      headerName: "User",
      flex: 5,
      hideable: false,
    },
  ];
  if (userState == "user") {
    return defaultColumns;
  } else if (userState == "admin") {
    defaultColumns = defaultColumns.concat(adminColumns);
    return defaultColumns;
  }
  return [];
};

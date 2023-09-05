import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "../data/mockData";
import { useTheme } from "@mui/material";
// import Header from "../scenes/Header";

const PatientTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "side",
      headerName: "Side",
      flex: 1,
    },
    {
      field: "target",
      headerName: "Target",
      flex: 1,
    },
    {
      field: "startTherapy",
      headerName: "Start Therapy",
      flex: 1,
    },
    {
      field: "numberTherapy",
      headerName: "N. Therapy",
      flex: 1,
    },
    {
      field: "endTherapy",
      headerName: "End Therapy",
      flex: 1,
    },
  ];

  return (
    <Box
    width="98%"
    height="98%"
    //   m="20px"
    >
      {/* <Header title="Patients table" /> */}
      <Box
        p="10px"
        // width="800px"
        height="100%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default PatientTable;

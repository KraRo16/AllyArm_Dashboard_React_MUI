import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";

const columns = [
  { field: "time", headerName: "Time", width: 100, display: "flex", justifyContent: "center" },
  {
    field: "code",
    headerName: "Code",
    width: 60,
    editable: true,
  },
  {
    field: "axis",
    headerName: "Axis",
    width: 40,
    editable: true,
  },
  {
    field: "message",
    headerName: "Message",
    type: "number",
    width: 250,
    editable: true,
  },
];

const rows = [
  { id: 0, time: "10:23:30:605", code: "100", axis: "5", message: "Cartesian inverse kinematics limit reached" },
  { id: 1, time: "10:23:30:605", code: "3", axis: "2", message: "Inverse kinematics: outside max arm length" },
  { id: 2, time: "10:23:30:605", code: "100", axis: "5", message: "Cartesian inverse kinematics limit reached" },
  { id: 3, time: "10:23:30:605", code: "3", axis: "2", message: "Inverse kinematics: outside max arm length" },
  { id: 4, time: "10:23:30:605", code: "100", axis: "5", message: "Cartesian inverse kinematics limit reached" },
  { id: 5, time: "10:23:30:605", code: "3", axis: "2", message: "Inverse kinematics: outside max arm length" },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const ErrorWarningBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="0 30px" width="100%">
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap" alignItems="center">
        <Box height="90%" width="100%">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            ERROR AND WARNING
          </Typography>
          <Box sx={{ height: "320px", width: "98%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 4,
                  },
                },
              }}
              pageSizeOptions={[4]}
              disableRowSelectionOnClick
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            alignItems="start"
            justifyContent="center"
            //  height="92%" width="40%"
            height="160px"
            // width="170px"
            m="0 10px"
            border="1px solid #887f4e97"
            borderRadius="10px"
          >
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              Description
            </Typography>
          </Box>
          <Box display="flex" height="170px" mt="10px">
            <Box
              display="flex"
              alignItems="start"
              justifyContent="center"
              //  height="92%" width="40%"
              // height="330px"
              width="150px"
              m="0 10px"
              border="1px solid #887f4e97"
              borderRadius="10px"
            >
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                Causes
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="start"
              justifyContent="center"
              //  height="92%" width="40%"
              // height="330px"
              width="150px"
              m="0 10px"
              border="1px solid #887f4e97"
              borderRadius="10px"
            >
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                Solutions
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorWarningBox;

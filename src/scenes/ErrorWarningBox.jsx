// import { Typography, Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../theme";

// const columns = [
//   { field: "time", headerName: "Time", width: 100, display: "flex", justifyContent: "center" },
//   {
//     field: "code",
//     headerName: "Code",
//     width: 60,
//     editable: true,
//   },
//   {
//     field: "axis",
//     headerName: "Axis",
//     width: 40,
//     editable: true,
//   },
//   {
//     field: "message",
//     headerName: "Message",
//     type: "number",
//     width: 250,
//     editable: true,
//   },
// ];

// const rows = [
//   { id: 0, time: "10:23:30:605", code: "100", axis: "5", message: "Cartesian inverse kinematics limit reached" },
//   { id: 1, time: "10:23:30:605", code: "3", axis: "2", message: "Inverse kinematics: outside max arm length" },
//   { id: 2, time: "10:23:30:605", code: "100", axis: "5", message: "Cartesian inverse kinematics limit reached" },
//   { id: 3, time: "10:23:30:605", code: "3", axis: "2", message: "Inverse kinematics: outside max arm length" },
//   { id: 4, time: "10:23:30:605", code: "100", axis: "5", message: "Cartesian inverse kinematics limit reached" },
//   { id: 5, time: "10:23:30:605", code: "3", axis: "2", message: "Inverse kinematics: outside max arm length" },
// ];

// const ErrorWarningBox = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box m="0 30px" width="100%">
//       <Box display="flex" justifyContent="space-between" flexWrap="nowrap" alignItems="center">
//         <Box height="90%" width="100%">
//           <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
//             ERROR AND WARNING
//           </Typography>
//           <Box sx={{ height: "320px", width: "98%" }}>
//             <DataGrid
//               rows={rows}
//               columns={columns}
//               initialState={{
//                 pagination: {
//                   paginationModel: {
//                     pageSize: 4,
//                   },
//                 },
//               }}
//               pageSizeOptions={[4]}
//               disableRowSelectionOnClick
//             />
//           </Box>
//         </Box>
//         <Box display="flex" flexDirection="column">
//           <Box
//             display="flex"
//             alignItems="start"
//             justifyContent="center"
//             //  height="92%" width="40%"
//             height="160px"
//             // width="170px"
//             m="0 10px"
//             border="1px solid #887f4e97"
//             borderRadius="10px"
//           >
//             <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
//               Description
//             </Typography>
//           </Box>
//           <Box display="flex" height="170px" mt="10px">
//             <Box
//               display="flex"
//               alignItems="start"
//               justifyContent="center"
//               //  height="92%" width="40%"
//               // height="330px"
//               width="150px"
//               m="0 10px"
//               border="1px solid #887f4e97"
//               borderRadius="10px"
//             >
//               <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
//                 Causes
//               </Typography>
//             </Box>
//             <Box
//               display="flex"
//               alignItems="start"
//               justifyContent="center"
//               //  height="92%" width="40%"
//               // height="330px"
//               width="150px"
//               m="0 10px"
//               border="1px solid #887f4e97"
//               borderRadius="10px"
//             >
//               <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
//                 Solutions
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ErrorWarningBox;

import React, { useState, useEffect } from "react";
import { Typography, Box, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { tokens } from "../theme";
import { sendMessage, subscribeToMessages, unsubscribeFromMessages } from "../Socket";

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
];
const ErrorWarningBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to store the selected error/warning
  const [buttonPresses, setButtonPresses] = useState({});
  const [data, setData] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const [selectedError, setSelectedError] = useState(null);
  const [selectedWarning, setSelectedWarning] = useState(null);

  const handleButton = (buttonId) => {
    const buttonPress = [buttonId];

    setButtonPresses((prevButtonPresses) => ({
      ...prevButtonPresses,
      ...buttonPress,
    }));

    sendMessage(buttonPress);
    console.log(buttonPress);
  };

  useEffect(() => {
    const handleDataUpdate = (newData) => {
      setData(newData.errorTest);
      setWarnings(newData.warningTest);
    };

    subscribeToMessages(handleDataUpdate);

    return () => {
      unsubscribeFromMessages(handleDataUpdate);
    };
  }, []);

  const handleRowClick = (error) => {
    setSelectedWarning(null);
    setSelectedError(error);
  };

  const handleWarningRowClick = (warning) => {
    setSelectedError(null);
    setSelectedWarning(warning);
  };

  return (
    <Box m="0 30px" width="100%">
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap">
        <Box height="90%" width="100%" display="flex" flexDirection="column">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            ERROR AND WARNING
          </Typography>
          <TableContainer sx={{ maxHeight: "320px", width: "98%" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>time</TableCell>
                  <TableCell>code</TableCell>
                  <TableCell>axis</TableCell>
                  <TableCell>message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((error, index) => (
                  <TableRow key={index} onClick={() => handleRowClick(error)} style={{ cursor: "pointer" }}>
                    <TableCell>{error.timestamp}</TableCell>
                    <TableCell>{error.errorCode}</TableCell>
                    <TableCell>{error.axis}</TableCell>
                    <TableCell>{error.message}</TableCell>
                  </TableRow>
                ))}
                {warnings.map((warning, index) => (
                  <TableRow key={index} onClick={() => handleRowClick(warning)} style={{ cursor: "pointer" }}>
                    <TableCell>{warning.timestamp}</TableCell>
                    <TableCell>{warning.warningCode}</TableCell>
                    <TableCell>{warning.axis}</TableCell>
                    <TableCell>{warning.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="start"
            flexDirection="column"
            width="320px"
            height="160px"
            m="0 10px"
            border="1px solid #887f4e97"
            borderRadius="10px"
          >
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              Description
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" p="10px">
              <Typography>{selectedError ? selectedError.description : selectedWarning ? selectedWarning.description : ""}</Typography>
            </Box>
          </Box>
          <Box display="flex" height="170px" mt="10px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="start"
              flexDirection="column"
              width="150px"
              m="0 10px"
              border="1px solid #887f4e97"
              borderRadius="10px"
            >
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                Causes
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" p="10px">
                <Typography>{selectedError ? selectedError.cause : selectedWarning ? selectedWarning.cause : ""}</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="start"
              flexDirection="column"
              width="150px"
              m="0 10px"
              border="1px solid #887f4e97"
              borderRadius="10px"
            >
              <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                Solutions
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" p="10px">
                <Typography>{selectedError ? selectedError.solution : selectedWarning ? selectedWarning.solution : ""}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorWarningBox;

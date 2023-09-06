import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tokens } from "../theme.js";
import { useTheme } from "@mui/material";

function createData(id, date, exercises, numberRepetitions) {
  return {id, date, exercises, numberRepetitions };
}

const rows = [
  createData("1",'10-11-2023', "Coffe", 6.0),
  createData("2",'01-02-2024', "Table", 9.0),
  createData("3",'31-12-2023', "Wearing", 16.0),
  createData("4",'10-11-2023', "Coffe", 6.0),
  createData("5",'01-02-2024', "Table", 9.0),
  createData("6",'31-12-2023', "Wearing", 16.0),
  createData("7",'10-11-2023', "Coffe", 6.0),
  createData("8",'01-02-2024', "Table", 9.0),
  createData("9",'31-12-2023', "Wearing", 16.0),
];

const PatientHistoryBox = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
  
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell sx={{ backgroundColor: colors.primary[300] }}>Date</TableCell>
            <TableCell sx={{ backgroundColor: colors.primary[300] }} align="right">Exercises</TableCell>
            <TableCell sx={{ backgroundColor: colors.primary[300] }} align="right">N. of Repetitions</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.exercises}</TableCell>
              <TableCell align="right">{row.numberRepetitions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PatientHistoryBox
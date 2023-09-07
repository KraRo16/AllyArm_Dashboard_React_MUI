import React from "react";
import { Typography, Box, useTheme, List, ListItem } from "@mui/material";
import { tokens } from "../theme";

const DiagnosticsBox = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const datas = 1;

  const driverWorkingMode = {
    0: "Driver Off",
    1: "Position int profiler",
    2: "Pos. int profiler wait for start",
    3: "Speed Percent",
    4: "Speed ABS",
    5: "Soft Stop",
    6: "Hard Stop",
    7: "Reset Error",
  };

  const masterWorkingMode = {
    0: "OFF",
    1: "STAND STILL",
    2: "TEST",
    3: "JOG",
    4: "Position Targer",
    5: "Pos. Target wait for start",
    6: "STOP",
  };

  const getDriverWorkingMode = (index) => {
    return driverWorkingMode[index] || "";
  };

  const getMasterWorkingMode = (index) => {
    return masterWorkingMode[index] || "";
  };

  return (
    <Box m="0 20px" width="90%">
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap" alignItems="center">
        {/* 1 AXIS */}

        <List className="data_list" sx={{ width: "220px" }}>
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 1
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.parity && data.parity[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.debug && data.debug[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.error && data.error[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warning && data.warning[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.motionOnGoing && data.motionOnGoing[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.onTargetPosition && data.onTargetPosition[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getMasterWorkingMode(data.driverState && data.driverState[0])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getDriverWorkingMode(data.workingMode && data.workingMode[0])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.targetPosition && data.targetPosition[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPosition && data.actualPosition[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPositionDeg && data.actualPositionDeg[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualTorque && data.actualTorque[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualFrequency && data.actualFrequency[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.errorCode && data.errorCode[0]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warningCode && data.warningCode[0]}
            </Typography>
          </ListItem>
        </List>

        {/* 2 AXIS */}

        <List className="data_list" sx={{ width: "220px" }}>
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 2
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.parity && data.parity[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.debug && data.debug[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.error && data.error[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warning && data.warning[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.motionOnGoing && data.motionOnGoing[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.onTargetPosition && data.onTargetPosition[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getMasterWorkingMode(data.driverState && data.driverState[1])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getDriverWorkingMode(data.workingMode && data.workingMode[1])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.targetPosition && data.targetPosition[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPosition && data.actualPosition[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPositionDeg && data.actualPositionDeg[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualTorque && data.actualTorque[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualFrequency && data.actualFrequency[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.errorCode && data.errorCode[1]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warningCode && data.warningCode[1]}
            </Typography>
          </ListItem>
        </List>

        {/* 3 AXIS */}
        <List className="data_list" sx={{ width: "220px" }}>
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 3
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.parity && data.parity[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.debug && data.debug[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.error && data.error[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warning && data.warning[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.motionOnGoing && data.motionOnGoing[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.onTargetPosition && data.onTargetPosition[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getMasterWorkingMode(data.driverState && data.driverState[2])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getDriverWorkingMode(data.workingMode && data.workingMode[2])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.targetPosition && data.targetPosition[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPosition && data.actualPosition[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPositionDeg && data.actualPositionDeg[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualTorque && data.actualTorque[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualFrequency && data.actualFrequency[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.errorCode && data.errorCode[2]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warningCode && data.warningCode[2]}
            </Typography>
          </ListItem>
        </List>

        {/* 4 AXIS */}
        <List className="data_list" sx={{ width: "220px" }}>
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 4
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.parity && data.parity[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.debug && data.debug[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.error && data.error[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warning && data.warning[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.motionOnGoing && data.motionOnGoing[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.onTargetPosition && data.onTargetPosition[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getMasterWorkingMode(data.driverState && data.driverState[3])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getDriverWorkingMode(data.workingMode && data.workingMode[3])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.targetPosition && data.targetPosition[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPosition && data.actualPosition[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPositionDeg && data.actualPositionDeg[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualTorque && data.actualTorque[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualFrequency && data.actualFrequency[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.errorCode && data.errorCode[3]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warningCode && data.warningCode[3]}
            </Typography>
          </ListItem>
        </List>

        {/* 5 AXIS */}
        <List className="data_list" sx={{ width: "220px" }}>
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 5
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.parity && data.parity[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.debug && data.debug[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.error && data.error[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warning && data.warning[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.motionOnGoing && data.motionOnGoing[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.onTargetPosition && data.onTargetPosition[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getMasterWorkingMode(data.driverState && data.driverState[4])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {getDriverWorkingMode(data.workingMode && data.workingMode[4])}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.targetPosition && data.targetPosition[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPosition && data.actualPosition[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualPositionDeg && data.actualPositionDeg[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualTorque && data.actualTorque[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.actualFrequency && data.actualFrequency[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.errorCode && data.errorCode[4]}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data.warningCode && data.warningCode[4]}
            </Typography>
          </ListItem>
        </List>
        <Box>
          {/* CART */}
          <List className="data_list">
            <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
              CARTESIAN
            </Typography>
            <ListItem display="flex" disablePadding>
              Axes X:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {Math.round(data.axesX)}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Axes Y:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {Math.round(data.axesY)}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Axes Z:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {Math.round(data.axesZ)}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Axes G°:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {Math.round(data.axesG)}
              </Typography>
            </ListItem>
          </List>

          {/* MASTER */}
          <List className="data_list">
            <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
              MASTER
            </Typography>
            <ListItem display="flex" disablePadding>
              Parity:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data.parity && data.parity[5]}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Debug:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data.debug && data.debug[5]}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Error:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data.error && data.error[5]}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Warning:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data.warning && data.warning[5]}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Motion on going:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data.motionOnGoing && data.motionOnGoing[5]}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              On target position:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data.onTargetPosition && data.onTargetPosition[5]}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Working mode:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {getMasterWorkingMode(data.workingMode && data.workingMode[5])}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Error code:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data.errorCode && data.errorCode[5]}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Warning code:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data.warningCode && data.warningCode[5]}
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default DiagnosticsBox;

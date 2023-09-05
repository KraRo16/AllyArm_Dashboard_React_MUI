import { Typography, Box, useTheme, List, ListItem } from "@mui/material";
import { tokens } from "../theme";

const DiagnosticsBox = ({ item, data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="0 20px" width="90%">
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap" alignItems="center">
        {/* 1 AXIS */}

        <List className="data_list" disablePadding>
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 1
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* 2 AXIS */}

        <List className="data_list">
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 2
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* 3 AXIS */}
        <List className="data_list">
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 3
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* 4 AXIS */}
        <List className="data_list">
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 4
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* 5 AXIS */}
        <List className="data_list">
          <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
            Axis 5
          </Typography>
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Debug:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Target Position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position°:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning code:{" "}
            <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
              {data}
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
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Axes Y:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Axes Z:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Axes G°:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
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
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Debug:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Error:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Warning:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Motion on going:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              On target position:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Master state:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Working mode:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Error code:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
            <ListItem display="flex" disablePadding>
              Warning code:{" "}
              <Typography variant="h5" ml="4px" sx={{ color: colors.greenAccent[500] }}>
                {data}
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default DiagnosticsBox;

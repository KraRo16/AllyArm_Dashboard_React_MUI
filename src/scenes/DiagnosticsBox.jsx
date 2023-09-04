import { Typography, Box, useTheme, List, ListItem } from "@mui/material";
import { tokens } from "../theme";

const DiagnosticsBox = ({ item, data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="0 30px" width="90%">
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="nowrap"
        alignItems="center"
      >
        {/* 2 AXIS */}

        <List className="data_list">
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* 2 AXIS */}

        <List className="data_list">
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* 3 AXIS */}
        <List className="data_list">
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* 4 AXIS */}
        <List className="data_list">
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* 5 AXIS */}
        <List className="data_list">
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* MASTER */}
        <List className="data_list">
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>

        {/* CART */}
        <List className="data_list">
          <ListItem display="flex" disablePadding>
            Parity:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Error:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Warning:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Driver state:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Working mode:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Motion on going:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            On target position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual position:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual torque:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
          <ListItem display="flex" disablePadding>
            Actual frequency:{" "}
            <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {data}
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default DiagnosticsBox;

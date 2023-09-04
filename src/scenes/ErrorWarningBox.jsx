import { Typography, Box, useTheme, List, ListItem } from "@mui/material";
import { tokens } from "../theme";

const ErrorWarningBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="0 30px">
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="nowrap"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          ERROR AND WARNING
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorWarningBox;

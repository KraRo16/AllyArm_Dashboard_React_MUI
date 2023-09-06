import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const PatientBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px" display="flex" flexDirection="column" justifyContent="space-around">
      <Box display="flex" alignItems="center" justifyContent="center" mt="20px" flexDirection="column">
        <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
          Patient Data
        </Typography>
        {/* <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          *You can change this position at the Setting section
        </Typography> */}
      </Box>
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          Name
        </Typography>
        <Typography variant="h4" sx={{ color: colors.greenAccent[100] }}>
          Jon Snow
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          Age
        </Typography>
        <Typography variant="h4" sx={{ color: colors.greenAccent[100] }}>
          36
        </Typography>
      </Box>{" "}
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          Side
        </Typography>
        <Typography variant="h4" sx={{ color: colors.greenAccent[100] }}>
          Left
        </Typography>
      </Box>{" "}
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          Start of ther.
        </Typography>
        <Typography variant="h4" sx={{ color: colors.greenAccent[100] }}>
          10-10-2023
        </Typography>
      </Box>{" "}
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          Number of ther.
        </Typography>
        <Typography variant="h4" sx={{ color: colors.greenAccent[100] }}>
          4
        </Typography>
      </Box>{" "}
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap" alignItems="center">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          Target
        </Typography>
        <Typography variant="h5" sx={{ color: colors.greenAccent[100] }}>
          Recupero del tono muscolare
        </Typography>
      </Box>{" "}
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          End of ther.
        </Typography>
        <Typography variant="h4" sx={{ color: colors.greenAccent[100] }}>
          03-02-2024
        </Typography>
      </Box>
    </Box>
  );
};

export default PatientBox;

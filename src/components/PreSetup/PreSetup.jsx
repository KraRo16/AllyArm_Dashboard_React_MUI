import { Box, useTheme } from "@mui/material";
import Header from "../../scenes/Header";
import { tokens } from "../../theme";
import InitialPos from "../../scenes/InitialPos";
import SideTherBox from "../../scenes/SideTherBox";

const PreSetup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="88%">
      <Header title="Pre-setup" subtitle="Select options to start the procedure" />
      <Box display="flex" width="100%" flexDirection="column" height="94%" mr="10px" mb>
        <Box backgroundColor={colors.primary[400]} width="30%" height="48%" display="flex" justifyContent="center" mb="20px">
            <InitialPos />
        </Box>
        <Box backgroundColor={colors.primary[400]} width="30%" height="48%" display="flex" justifyContent="center">
            <SideTherBox />
        </Box>
      </Box>
      <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"></Box>
    </Box>
  );
};

export default PreSetup;

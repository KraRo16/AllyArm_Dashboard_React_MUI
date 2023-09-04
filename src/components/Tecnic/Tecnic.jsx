import { Box, useTheme } from "@mui/material";
import Header from "../../scenes/Header";
import { tokens } from "../../theme";
import DiagnosticsBox from "../../scenes/DiagnosticsBox";
import TestBox from "../../scenes/TestBox";
import ErrorWarningBox from "../../scenes/ErrorWarningBox";

const Tecnic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Tecnic" subtitle="Diagnostics" />

      <Box
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <DiagnosticsBox data="1" />
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        height="390px"
      >
        <Box
          backgroundColor={colors.primary[400]}
          mt="10px"
          mr="10px"
          width="70%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ErrorWarningBox />
        </Box>
        <Box
          backgroundColor={colors.primary[400]}
          mt="10px"
          width="30%"
          display="flex"
          justifyContent="center"
        >
          <TestBox />
        </Box>
      </Box>
    </Box>
  );
};

export default Tecnic;

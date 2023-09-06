import { Box, useTheme } from "@mui/material";
import Header from "../../scenes/Header";
import { tokens } from "../../theme";
import PatientBox from "../../scenes/PatientBox";
import PatientHistoryBox from "../../scenes/PatientHistoryBox"
import LineChartBox from "../../scenes/LineChartBox"

const Valutation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="88%">
      <Header title="Valutation" subtitle="Information about the patient's progress" />
      <Box display="flex" height="94%">
        <Box display="flex" width="30%" flexDirection="column" height="100%" mr="10px">
          <Box backgroundColor={colors.primary[400]} width="100%" height="48%" display="flex" justifyContent="center" mb="20px">
            <PatientBox />
          </Box>
          <Box backgroundColor={colors.primary[400]} width="100%" height="48%" display="flex" justifyContent="center">
          <PatientBox />
          </Box>
        </Box>
        <Box display="flex" width="70%" flexDirection="column" height="100%">
          <Box backgroundColor={colors.primary[400]} width="100%" height="48%" display="flex" justifyContent="center" mb="20px">
            <PatientHistoryBox />
          </Box>
          <Box backgroundColor={colors.primary[400]} width="100%" height="48%" display="flex" justifyContent="center">
            <LineChartBox />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Valutation;

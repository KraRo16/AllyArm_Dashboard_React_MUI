import { Box, useTheme } from "@mui/material";
import Header from "../../scenes/Header";
import { tokens } from "../../theme";


const Exercises = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="88%">
      <Header title="Exercises" subtitle="Exercise management" />
      <Box display="flex" width="100%" flexDirection="column" height="94%" mr="10px" mb>
        <Box backgroundColor={colors.primary[400]} width="30%" height="48%" display="flex" justifyContent="center" mb="20px">

        </Box>
        <Box backgroundColor={colors.primary[400]} width="30%" height="48%" display="flex" justifyContent="center">

        </Box>
      </Box>
      <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"></Box>
    </Box>
  );
};

export default Exercises;

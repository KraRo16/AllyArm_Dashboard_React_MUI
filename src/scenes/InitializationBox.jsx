import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

const InitializationBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="center" mt="20px" flexDirection="column">

      </Box>
    </Box>
  );
};

export default InitializationBox;

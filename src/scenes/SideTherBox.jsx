import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

const SideTherBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="center" mt="20px" flexDirection="column">
        <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
          Therapeutic Side
        </Typography>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          *Select "therapeutic side" of patient
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column"  justifyContent="center" mt="40px">
        <Button type="submit" size="large" color="secondary" variant="contained" sx={{ padding: "30px"}}>
          <Typography variant="h3">
            Left Side
          </Typography>
        </Button>
        <Button type="submit" size="large" color="secondary" variant="contained" sx={{ marginTop: "40px", padding: "30px"}}>
          <Typography variant="h3">
            Right Side
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SideTherBox;

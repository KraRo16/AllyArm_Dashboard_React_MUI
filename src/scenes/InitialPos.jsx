import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

const InitialPos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="center" mt="20px" flexDirection="column">
        <Typography variant="h3" sx={{ color: colors.greenAccent[500] }}>
          Initial Position
        </Typography>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          *You can change this position at the Setting section
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column"  justifyContent="center" mt="40px">
        <Button type="submit" size="large" color="secondary" variant="contained" sx={{ padding: "10px"}}>
          <Typography variant="h3">
            Wearing <br /> Position
          </Typography>
        </Button>
        <Button type="submit" size="large" color="secondary" variant="contained" sx={{ marginTop: "40px", padding: "10px"}}>
          <Typography variant="h3">
            Free <br /> Position
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default InitialPos;

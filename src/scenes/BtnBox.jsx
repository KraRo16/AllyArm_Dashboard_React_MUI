import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

const BtnBox = ({ subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
      <Button type="submit" color="secondary" variant="contained" sx={{ fontWeight: "600"}}>
        START
      </Button>
    </Box>
  );
};

export default BtnBox;

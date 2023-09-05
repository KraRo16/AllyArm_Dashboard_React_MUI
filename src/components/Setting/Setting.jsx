import { Typography, Box, useTheme } from "@mui/material";
import Header from "../../scenes/Header";
import { tokens } from "../../theme";
import SliderBox from "../../scenes/SliderBox";

const Setting = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="88%">
      <Header title="Setting" subtitle="Exo setting"/>
      <Box
        backgroundColor={colors.primary[400]}
        width="100%"
        height="44%"
        display="flex"
        justifyContent="space-between"
        mb="10px"
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          p="0 20px"
        >
          <Typography
            display="flex"
            justifyContent="center"
            variant="h4"
            width="96%"
            sx={{ color: colors.greenAccent[500] }}
          >
            Axis Speed
          </Typography>
          <SliderBox title={"Axis"} />
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          p="0 20px"
        >
          <Typography
            display="flex"
            justifyContent="center"
            variant="h4"
            width="96%"
            sx={{ color: colors.greenAccent[500] }}
          >
            Axis Speed Advance
          </Typography>
          <SliderBox title={"Axis"} />
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          p="0 20px"
        >
          <Typography
            display="flex"
            justifyContent="center"
            variant="h4"
            width="96%"
            sx={{ color: colors.greenAccent[500] }}
          >
            Joy Sensitivity
          </Typography>
          <SliderBox title={"Axis"} />
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          p="0 20px"
        >
          <Typography
            display="flex"
            justifyContent="center"
            variant="h4"
            width="96%"
            sx={{ color: colors.greenAccent[500] }}
          >
            Wearing Free Position
          </Typography>
          <SliderBox title={"Axis"} />
        </Box>
      </Box>
      <Box
        backgroundColor={colors.primary[400]}
        width="100%"
        height="48%"
        display="flex"
        justifyContent="space-between"
      >
        <Box
          width="100%"
          height="300px"
          display="flex"
          flexDirection="column"
          p="0 20px"
        >
          <Typography
            display="flex"
            justifyContent="center"
            variant="h4"
            width="96%"
            sx={{ color: colors.greenAccent[500] }}
          >
            ROM
          </Typography>
          <SliderBox title={"Axis"} />
        </Box>
        <Box
          width="100%"
          height="300px"
          display="flex"
          flexDirection="column"
          p="0 20px"
        >
          <Typography
            display="flex"
            justifyContent="center"
            variant="h4"
            width="96%"
            sx={{ color: colors.greenAccent[500] }}
          >
            Setting Exercises
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Setting;

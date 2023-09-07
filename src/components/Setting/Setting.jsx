import React, { useState, useEffect } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Header from "../../scenes/Header";
import { tokens } from "../../theme";
import ROMSlider from "../../scenes/Sliders/ROMSlider";
import AxisSpeedSlider from "../../scenes/Sliders/AxisSpeedSlider"
import AxisSpeedAdvSlider from "../../scenes/Sliders/AxisSpeedAdvSlider"
import JoySensitivitySlider from "../../scenes/Sliders/JoySensitivitySlider"
import WearingFreePosBox from "../../scenes/WearingFreePosBox";
import { subscribeToMessages, sendMessage, unsubscribeFromMessages } from "../../Socket";

const Setting = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState({});

  useEffect(() => {
    const handleDataUpdate = (newData) => {
      setData(newData);
    };

    subscribeToMessages(handleDataUpdate);

    return () => {
      unsubscribeFromMessages(handleDataUpdate);
    };
  }, []);


  return (
    <Box m="20px" height="88%">
      <Header title="Setting" subtitle="Exo setting" />
      <Box backgroundColor={colors.primary[400]} width="100%" height="44%" display="flex" justifyContent="space-between" mb="10px">
        <Box width="100%" display="flex" flexDirection="column" p="0 20px">
          <Typography display="flex" justifyContent="center" variant="h4" width="100%" sx={{ color: colors.greenAccent[500] }}>
            Axis Speed
          </Typography>
          <AxisSpeedSlider />
        </Box>
        <Box width="100%" display="flex" flexDirection="column" p="0 20px">
          <Typography display="flex" justifyContent="center" variant="h4" width="100%" sx={{ color: colors.greenAccent[500] }}>
            Axis Speed Advance
          </Typography>
          <AxisSpeedAdvSlider  />
        </Box>
        <Box width="100%" display="flex" flexDirection="column" p="0 20px">
          <Typography display="flex" justifyContent="center" variant="h4" width="100%" sx={{ color: colors.greenAccent[500] }}>
            Joy Sensitivity
          </Typography>
          <JoySensitivitySlider  />
        </Box>
      </Box>
      <Box backgroundColor={colors.primary[400]} width="100%" height="48%" display="flex" justifyContent="space-between">
        <Box width="100%" height="300px" display="flex" flexDirection="column" p="0 20px">
          <Typography display="flex" justifyContent="center" variant="h4" width="100%" sx={{ color: colors.greenAccent[500] }}>
            ROM
          </Typography>
          <ROMSlider />
        </Box>
        <Box width="100%" height="300px" display="flex" flexDirection="column" p="0 20px">
          <Typography display="flex" justifyContent="center" variant="h4" width="100%" sx={{ color: colors.greenAccent[500] }}>
            Wearing Free Position
          </Typography>
          <WearingFreePosBox data={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default Setting;

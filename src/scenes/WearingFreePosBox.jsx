import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import { subscribeToMessages, sendMessage } from "../Socket";

const WearingFreePosBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState({});
  const [wearingPosSave, setWearingPosSave] = useState([]);
  const [restPosSave, setRestPosSave] = useState([]);

  useEffect(() => {
    const handleDataUpdate = (newData) => {
      setData(newData);
    };

    subscribeToMessages(handleDataUpdate);
  }, []);

  const WearingPosClick = () => {
    setWearingPosSave(data.actualPositionDeg || []);
    const currentData = data.actualPosition || [];
    const wearingData = currentData.reduce((acc, value, index) => {
      const address = 51 + index;
      return { ...acc, [address]: value };
    }, {});
    sendMessage(wearingData);
  };

  const RestPosClick = () => {
    setRestPosSave(data.actualPositionDeg || []);
    const currentData = data.actualPosition || [];
    const restData = currentData.reduce((acc, value, index) => {
      const address = 56 + index;
      return { ...acc, [address]: value };
    }, {});
    sendMessage(restData);
  };

  return (
    <Box width="100%" m="0" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="center">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          Actual Position
        </Typography>
      </Box>
      <Box display="flex" flexWrap="nowrap" justifyContent="space-between">
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 1
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {data.actualPositionDeg && data.actualPositionDeg[0]}°
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 2
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {data.actualPositionDeg && data.actualPositionDeg[1]}°
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 3
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {data.actualPositionDeg && data.actualPositionDeg[2]}°
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 4
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {data.actualPositionDeg && data.actualPositionDeg[3]}°
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 5
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {data.actualPositionDeg && data.actualPositionDeg[4]}°
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          Wearing Position
        </Typography>
      </Box>
      <Box display="flex" flexWrap="nowrap" justifyContent="space-between">
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 1
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {wearingPosSave[0]}
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 2
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {wearingPosSave[1]}
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 3
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {wearingPosSave[2]}
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 4
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {wearingPosSave[3]}
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 5
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {wearingPosSave[5]}
          </Typography>
        </Box>
      </Box>
      <Box mt="2px" display="flex" justifyContent="center" mb="4px">
        <Button type="submit" color="secondary" onClick={WearingPosClick} variant="contained" sx={{ width: "40%", fontWeight: "600" }}>
          SAVE
        </Button>
      </Box>

      <Box display="flex" justifyContent="center">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          Free Position
        </Typography>
      </Box>
      <Box display="flex" flexWrap="nowrap" justifyContent="space-between">
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 1
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {restPosSave[0]}
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 2
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {restPosSave[1]}
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 3
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {restPosSave[2]}
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 4
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {restPosSave[3]}
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          flexDirection="column"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 5
          </Typography>
          <Typography variant="h6" sx={{ color: colors.greenAccent[100] }}>
            {restPosSave[4]}
          </Typography>
        </Box>
      </Box>
      <Box mt="2px" display="flex" justifyContent="center">
        <Button type="submit" onClick={RestPosClick} color="secondary" variant="contained" sx={{ width: "40%", fontWeight: "600" }}>
          SAVE
        </Button>
      </Box>
    </Box>
  );
};

export default WearingFreePosBox;

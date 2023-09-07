import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Slider, Button } from "@mui/material";
import { tokens } from "../../theme";
import { BsFillLockFill, BsFillUnlockFill } from "react-icons/bs";
import { subscribeToMessages, unsubscribeFromMessages, sendMessage } from "../../Socket";

const AxisSpeedAdvSlider = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [axisValue1, setAxisValue1] = useState(5);
  const [axisValue2, setAxisValue2] = useState(5);
  const [axisValue3, setAxisValue3] = useState(5);
  const [axisValue4, setAxisValue4] = useState(5);
  const [axisValue5, setAxisValue5] = useState(5);
  const [isLocked, setIsLocked] = useState(false);
  const [isLockerPressed, setIsLockerPressed] = useState(false);
  const [data, setData] = useState({});
  const [sliderChanged, setSliderChanged] = useState(false);

  useEffect(() => {
    const handleDataUpdate = (data) => {
      const { clientData } = data;
      setData(clientData);
    };

    subscribeToMessages(handleDataUpdate);

    return () => {
      unsubscribeFromMessages(handleDataUpdate);
    };
  }, []);

  useEffect(() => {
    if (data["60"] && !sliderChanged) {
      setAxisValue1(data["60"]);
    }
    if (data["61"] && !sliderChanged) {
      setAxisValue2(data["61"]);
    }
    if (data["62"] && !sliderChanged) {
      setAxisValue3(data["62"]);
    }
    if (data["63"] && !sliderChanged) {
      setAxisValue4(data["63"]);
    }
    if (data["64"] && !sliderChanged) {
      setAxisValue5(data["64"]);
    }
  }, [data, sliderChanged]);

  useEffect(() => {
    if (data.lockSpeed !== undefined && !isLockerPressed) {
      setIsLocked(data.lockSpeed);
    }
  }, [data, isLockerPressed]);

  const handleChangeAxis1 = (event, newValue) => {
    setAxisValue1(newValue);
    if (isLocked) {
      setAxisValue2(newValue);
      setAxisValue3(newValue);
      setAxisValue4(newValue);
      setAxisValue5(newValue);
    }
    setSliderChanged(true);
  };

  const handleChangeAxis2 = (event, newValue) => {
    setAxisValue2(newValue);
    if (isLocked) {
      setAxisValue1(newValue);
      setAxisValue3(newValue);
      setAxisValue4(newValue);
      setAxisValue5(newValue);
    }
    setSliderChanged(true);
  };

  const handleChangeAxis3 = (event, newValue) => {
    setAxisValue3(newValue);
    if (isLocked) {
      setAxisValue1(newValue);
      setAxisValue2(newValue);
      setAxisValue4(newValue);
      setAxisValue5(newValue);
    }
    setSliderChanged(true);
  };

  const handleChangeAxis4 = (event, newValue) => {
    setAxisValue4(newValue);
    if (isLocked) {
      setAxisValue1(newValue);
      setAxisValue2(newValue);
      setAxisValue3(newValue);
      setAxisValue5(newValue);
    }
    setSliderChanged(true);
  };

  const handleChangeAxis5 = (event, newValue) => {
    setAxisValue5(newValue);
    if (isLocked) {
      setAxisValue1(newValue);
      setAxisValue2(newValue);
      setAxisValue3(newValue);
      setAxisValue4(newValue);
    }
    setSliderChanged(true);
  };
  const handleSync = () => {
    setIsLocked(!isLocked);
    setIsLockerPressed(true);
    if (!isLocked) {
      setAxisValue2(axisValue1);
      setAxisValue3(axisValue1);
      setAxisValue4(axisValue1);
      setAxisValue5(axisValue1);
    }
    setSliderChanged(true);
  };

  const handleSave = () => {
    const dataToSave = {
      60: axisValue1,
      61: axisValue2,
      62: axisValue3,
      63: axisValue4,
      64: axisValue5,
      lockSpeedAd: isLocked && sliderChanged,
    };
    sendMessage(dataToSave);
  };

  const handleDefault = () => {
    setAxisValue1(5);
    setAxisValue2(5);
    setAxisValue3(5);
    setAxisValue4(5);
    setAxisValue5(5);
    setSliderChanged(true);
  };

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Button onClick={handleSync}>
        {isLocked ? <BsFillLockFill size={20} color="red" /> : <BsFillUnlockFill size={20} color="green" />}
      </Button>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 1
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {axisValue1}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={axisValue1}
        onChange={handleChangeAxis1}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 2
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {axisValue2}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={axisValue2}
        onChange={handleChangeAxis2}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 3
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {axisValue3}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={axisValue3}
        onChange={handleChangeAxis3}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 4
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {axisValue4}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={axisValue4}
        onChange={handleChangeAxis4}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 5
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {axisValue5}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={axisValue5}
        onChange={handleChangeAxis5}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box mt="10px" display="flex" justifyContent="space-around">
        <Button type="submit" color="secondary" onClick={handleSave} variant="contained" sx={{ width: "40%", fontWeight: "600" }}>
          SAVE
        </Button>
        <Button type="submit" variant="contained" onClick={handleDefault} sx={{ width: "40%", background: colors.personal[200], fontWeight: "600" }}>
          DEFAULT
        </Button>
      </Box>
    </Box>
  );
};

export default AxisSpeedAdvSlider;

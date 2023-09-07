import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useTheme, Slider, Button } from "@mui/material";
import { tokens } from "../../theme";
import { subscribeToMessages, unsubscribeFromMessages, sendMessage } from "../../Socket";

const AxisSpeedSlider = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [sliderValues, setSliderValues] = useState({
    51: [-50, 30],
    52: [-90, 20],
    53: [-10, 70],
    54: [5, 135],
  });
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
    if (data[101] && !sliderChanged) {
      setSliderValues((prevValues) => ({
        ...prevValues,
        51: [data[101], prevValues[51][1]],
      }));
    }
    if (data[102] && !sliderChanged) {
      setSliderValues((prevValues) => ({
        ...prevValues,
        51: [prevValues[51][0], data[102]],
      }));
    }
    if (data[103] && !sliderChanged) {
      setSliderValues((prevValues) => ({
        ...prevValues,
        52: [data[103], prevValues[52][1]],
      }));
    }
    if (data[104] && !sliderChanged) {
      setSliderValues((prevValues) => ({
        ...prevValues,
        52: [prevValues[52][0], data[104]],
      }));
    }
    if (data[105] && !sliderChanged) {
      setSliderValues((prevValues) => ({
        ...prevValues,
        53: [data[105], prevValues[53][1]],
      }));
    }
    if (data[106] && !sliderChanged) {
      setSliderValues((prevValues) => ({
        ...prevValues,
        53: [prevValues[53][0], data[106]],
      }));
    }
    if (data[107] && !sliderChanged) {
      setSliderValues((prevValues) => ({
        ...prevValues,
        54: [data[107], prevValues[54][1]],
      }));
    }
    if (data[108] && !sliderChanged) {
      setSliderValues((prevValues) => ({
        ...prevValues,
        54: [prevValues[54][0], data[108]],
      }));
    }
  }, [data, sliderChanged]);

  const previousSliderValuesRef = useRef(sliderValues);

  const handleSaveClick = () => {
    const changedValues = {};

    for (const axis in sliderValues) {
      if (
        sliderValues.hasOwnProperty(axis) &&
        (sliderValues[axis][0] !== previousSliderValuesRef.current[axis][0] ||
          sliderValues[axis][1] !== previousSliderValuesRef.current[axis][1])
      ) {
        const minAddress = Number(axis) * 2 - 1;
        const maxAddress = Number(axis) * 2;
        changedValues[minAddress] = sliderValues[axis][0];
        changedValues[maxAddress] = sliderValues[axis][1];
      }
    }

    if (Object.keys(changedValues).length > 0) {
      sendMessage(changedValues);
      previousSliderValuesRef.current = sliderValues;
    }
  };

  const handleSliderChange = (axis, newValue) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [axis]: newValue,
    }));
    setSliderChanged(true);
  };

  const handleDefaultClick = () => {
    setSliderValues({
      51: [-50, 30],
      52: [-90, 20],
      53: [-10, 70],
      54: [5, 135],
    });
    setSliderChanged(true);
  };

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Min: {sliderValues[51][0]}
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Max: {sliderValues[51][1]}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[51]}
        getAriaLabel={() => "Minimum distance"}
        valueLabelDisplay="auto"
        disableSwap
        min={-50}
        max={30}
        onChange={(event, newValue) => handleSliderChange("51", newValue)}
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Min: {sliderValues[52][0]}
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Max: {sliderValues[52][1]}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[52]}
        getAriaLabel={() => "Minimum distance"}
        valueLabelDisplay="auto"
        disableSwap
        min={-90}
        max={20}
        onChange={(event, newValue) => handleSliderChange("52", newValue)}
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Min: {sliderValues[53][0]}
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Max: {sliderValues[53][1]}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[53]}
        getAriaLabel={() => "Minimum distance"}
        valueLabelDisplay="auto"
        disableSwap
        min={-10}
        max={70}
        onChange={(event, newValue) => handleSliderChange("53", newValue)}
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Min: {sliderValues[54][0]}
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Max: {sliderValues[54][1]}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[54]}
        getAriaLabel={() => "Minimum distance"}
        valueLabelDisplay="auto"
        disableSwap
        min={5}
        max={135}
        onChange={(event, newValue) => handleSliderChange("54", newValue)}
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Min: {sliderValues[54][0]}
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Max: {sliderValues[54][1]}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[54]}
        getAriaLabel={() => "Minimum distance"}
        valueLabelDisplay="auto"
        disableSwap
        min={5}
        max={135}
        onChange={(event, newValue) => handleSliderChange("54", newValue)}
        sx={{ color: colors.primary[100] }}
      />
      <Box mt="10px" display="flex" justifyContent="space-around">
        <Button type="submit" color="secondary" onClick={handleSaveClick} variant="contained" sx={{ width: "40%", fontWeight: "600" }}>
          SAVE
        </Button>
        <Button type="submit" variant="contained" onClick={handleDefaultClick} sx={{ width: "40%", background: colors.personal[200], fontWeight: "600" }}>
          DEFAULT
        </Button>
      </Box>
    </Box>
  );
};

export default AxisSpeedSlider;

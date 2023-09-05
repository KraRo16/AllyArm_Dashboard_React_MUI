import React, { useState } from "react"; // Импортируем useState
import { Box, Typography, useTheme, Slider, Button } from "@mui/material";
import { tokens } from "../theme";

const SliderSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Создаем состояние для хранения значений слайдеров
  const [sliderValues, setSliderValues] = useState([20]);
  const [axisValue1, setAxisValue1] = useState(5);
  const [axisValue2, setAxisValue2] = useState(5);
  const [axisValue3, setAxisValue3] = useState(5);
  const [axisValue4, setAxisValue4] = useState(5);
  const [axisValue5, setAxisValue5] = useState(5);

  // Обработчик изменения значения слайдера
  const handleChange = (event, newValue, index) => {
    setSliderValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });
  };

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 1
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {sliderValues}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 2
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {sliderValues}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 3
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {sliderValues}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 4
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {sliderValues}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          Axis 5
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {sliderValues}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        sx={{ color: colors.primary[100] }}
      />
      <Box mt="30px" display="flex" justifyContent="center">
        <Button type="submit" color="secondary" variant="contained" sx={{ width: "80%" }}>
          SAVE
        </Button>
      </Box>
    </Box>
  );
};

export default SliderSection;

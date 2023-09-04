import React, { useState } from "react"; // Импортируем useState
import { Box, Typography, useTheme, Slider, Button } from "@mui/material";
import { tokens } from "../theme";

const SliderSection = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Создаем состояние для хранения значений слайдеров
  const [sliderValues, setSliderValues] = useState([20, 80]);

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
          {title}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {title}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {title}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {title}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {title}
        </Typography>
      </Box>
      <Slider
        size="small"
        value={sliderValues[0]} // Значение первого слайдера
        onChange={(event, newValue) => handleChange(event, newValue, 0)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />

      <Button type="submit" color="secondary" variant="contained">
        SAVE
      </Button>
    </Box>
  );
};

export default SliderSection;

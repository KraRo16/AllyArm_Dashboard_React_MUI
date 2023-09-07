import React, { useState } from "react";
import { Typography, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import mode from "../api/testBtn.json";
import { sendMessage } from "../Socket";

const TestBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [buttonPresses, setButtonPresses] = useState({});

  const handleButtonClick = (buttonId) => {
    const buttonPress = { 10: 2, 11: buttonId };

    setButtonPresses((prevButtonPresses) => ({
      ...prevButtonPresses,
      ...buttonPress,
    }));

    sendMessage(buttonPress);
  };

  const handleButtonStop = (buttonId) => {
    const buttonPress = [buttonId];

    setButtonPresses((prevButtonPresses) => ({
      ...prevButtonPresses,
      ...buttonPress,
    }));

    sendMessage(buttonPress);
  };

  return (
    <Box display="flex" justifyContent="space-between" flexDirection="column" alignItems="center" width="100%">
      <Box display="flex" justifyContent="space-between" flexWrap="nowrap" mb="20px">
        <Typography variant="h1" sx={{ color: colors.greenAccent[500] }}>
          TEST MODE
        </Typography>
      </Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} width="94%">
        {/* <Button type="submit" color="secondary" variant="contained">
          ONE
        </Button> */}
        {mode.map((item) => (
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            key={item.id_button}
            onClick={() => handleButtonClick(item.id_button)}
            sx={{fontWeight: "600"}}
          >
            {item.description_button}
          </Button>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mb="20px" width="50%">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "100%", backgroundColor: colors.redAccent[500], color: colors.primary[100], fontWeight: "600", letterSpacing: 6 }}
          onClick={() => handleButtonStop("stop")}
        >
          STOP
        </Button>
      </Box>
    </Box>
  );
};

export default TestBox;

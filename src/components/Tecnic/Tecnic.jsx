import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../scenes/Header";
import { tokens } from "../../theme";
import DiagnosticsBox from "../../scenes/DiagnosticsBox";
import TestBox from "../../scenes/TestBox";
import ErrorWarningBox from "../../scenes/ErrorWarningBox";
import { subscribeToMessages, unsubscribeFromMessages } from "../../Socket";

const Tecnic = () => {
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
      <Header title="Tecnic" subtitle="Diagnostics" />

      <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" height="48%">
        <DiagnosticsBox data={data} />
      </Box>
      <Box display="flex" width="100%" justifyContent="space-between" height="46%">
        <Box
          backgroundColor={colors.primary[400]}
          mt="10px"
          mr="10px"
          width="90%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ErrorWarningBox />
        </Box>
        <Box backgroundColor={colors.primary[400]} mt="10px" width="30%" display="flex" justifyContent="center">
          <TestBox />
        </Box>
      </Box>
    </Box>
  );
};

export default Tecnic;

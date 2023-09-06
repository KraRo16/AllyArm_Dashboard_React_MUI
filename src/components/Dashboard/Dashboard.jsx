import { useState } from "react";
import { tokens } from "../../theme";

// import { mockTransactions } from "../../data/mockData";

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Box, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Header from "../../scenes/Header";
import PatientTable from "../../scenes/PatientTable";
import PatientCRUD from "../../scenes/PatientCRUD";

import StatBox from "../../scenes/StatBox";
import BtnBox from "../../scenes/BtnBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isPatientCRUDOpen, setIsPatientCRUDOpen] = useState(false);

  const handleAddClick = () => {
    setIsPatientCRUDOpen(true);
  };

  const handleClosePatientCRUD = () => {
    setIsPatientCRUDOpen(false);
  };

  const handleEscKeyPress = (e) => {
    if (e.key === 'Escape') {
      handleClosePatientCRUD();
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClosePatientCRUD();
    }
  };

  return (
    <Box m="20px" height="88%">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      {/* GRID */}
      <Box display="flex" alignItems="start" height="94%">
        <Box display="flex" alignItems="center" flexDirection="column" height="100%" width="100%">
          <Box position="relative" backgroundColor={colors.primary[400]} width="100%" height="80%" display="flex" alignItems="center" justifyContent="center">
            <PatientTable />
            <IconButton
              onClick={handleAddClick}
                sx={{
                  position: 'absolute',
                  bottom: '80px',
                  right: '30px',
                  color: 'white',
                  border: "1px solid green",
                  backgroundColor: colors.greenAccent[700]
                }}
              >
                <AddIcon />
              </IconButton>
              {isPatientCRUDOpen && (
              <div
                className="patient-crud-background"
                onClick={handleBackgroundClick}
                onKeyDown={handleEscKeyPress}
                role="button"
                tabIndex={0}
              >
                <PatientCRUD onClose={handleClosePatientCRUD} />
              </div>
            )}
          </Box>
          <Box display="flex" width="100%" height="20%" justifyContent="space-between">
            <Box backgroundColor={colors.primary[400]} mt="10px" width="78%" display="flex" justifyContent="space-around">
              <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox
                  title="12,361"
                  subtitle="PATIENT"
                  progress="0.75"
                  increase="+14%"
                  icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
                />
              </Box>
              <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox
                  title="431,225"
                  subtitle="EXERCISES"
                  progress="0.50"
                  increase="+21%"
                  icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
                />
              </Box>
              <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox
                  title="32,441"
                  subtitle="VALUTATION"
                  progress="0.30"
                  increase="+5%"
                  icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
                />
              </Box>
            </Box>
            <Box backgroundColor={colors.primary[400]} mt="10px" width="21%" display="flex" alignItems="center" justifyContent="center">
              <BtnBox subtitle="FIRST CHOOSE PATIENT" />
            </Box>
          </Box>
        </Box>
        {/* <Box display="flex" alignItems="center" flexDirection="column" width="25%" height="100%">
          <Box
            backgroundColor={colors.primary[400]}
            width="90%"
            height="90%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <PatientCRUD />
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            mt="10px"
            width="90%"
            height="79px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <BtnBox subtitle="FIRST CHOOSE PATIENT" />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;

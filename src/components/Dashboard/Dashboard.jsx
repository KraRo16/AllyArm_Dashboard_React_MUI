import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";

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

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      {/* GRID & CHARTS */}
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            //   gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            width="800px"
            height="440px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <PatientTable />
          </Box>
          <Box
            backgroundColor={colors.primary[400]}
            mt="10px"
            width="100%"
            height="139px"
            display="flex"
            justifyContent="space-around"
          >
            <Box
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="12,361"
                subtitle="PATIENT"
                progress="0.75"
                increase="+14%"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="431,225"
                subtitle="EXERCISES"
                progress="0.50"
                increase="+21%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="32,441"
                subtitle="VALUTATION"
                progress="0.30"
                increase="+5%"
                icon={
                  <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="90%"
        >
          <Box
            backgroundColor={colors.primary[400]}
            width="90%"
            height="500px"
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
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

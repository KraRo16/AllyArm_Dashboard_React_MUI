import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

const WearingFreePosBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 1
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 2
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 3
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 4
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 5
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
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 1
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 2
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 3
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 4
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 5
          </Typography>
        </Box>
      </Box>
      <Box mt="2px" display="flex" justifyContent="center" mb="4px">
        <Button type="submit" color="secondary" variant="contained" sx={{ width: "40%", font: "bold" }}>
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
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 1
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 2
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 3
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 4
          </Typography>
        </Box>
        <Box
          backgroundColor={colors.primary[500]}
          width="18%"
          height="60px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          mb="10px"
        >
          <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            Axis 5
          </Typography>
        </Box>
      </Box>
      <Box mt="2px" display="flex" justifyContent="center">
        <Button type="submit" color="secondary" variant="contained" sx={{ width: "40%", font: "bold" }}>
          SAVE
        </Button>
      </Box>
    </Box>
  );
};

export default WearingFreePosBox;

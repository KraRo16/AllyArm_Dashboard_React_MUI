import {
  Typography,
  Box,
  useTheme,
  List,
  ListItem,
  Button,
  ButtonGroup,
} from "@mui/material";
import { tokens } from "../theme";
// import { testBtn } from "../data/testData";

const TestBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="nowrap"
        mb="20px"
      >
        <Typography variant="h1" sx={{ color: colors.greenAccent[500] }}>
          TEST MODE
        </Typography>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        <Button type="submit" color="secondary" variant="contained">
          ONE
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          TWO
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          THREE
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          FOUR
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          FIVE
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          SIX
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          ONE
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          TWO
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          THREE
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          FOUR
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          FIVE
        </Button>
        <Button type="submit" color="secondary" variant="contained">
          SIX
        </Button>
      </Box>
    </Box>
  );
};

export default TestBox;

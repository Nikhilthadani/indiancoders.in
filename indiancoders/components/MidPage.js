import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Cards from "./Cards";

const MidPage = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        margin={"auto"}
        marginTop={3}
        padding={1}
        maxWidth={600}
      >
        <Typography
          fontFamily={"Oxygen"}
          fontSize={{ lg: "24px", md: "22px", sm: "18px", xs: "16px" }}
          padding={1}
          fontWeight={"300"}
          color="purple"
          textAlign={"center"}
          variant="h2"
        >
          Welcome to Indian Coders
        </Typography>
        <Typography
          fontFamily={"Ubuntu"}
          fontSize={{ lg: "50px", md: "48px", sm: "38px", xs: "30px" }}
          padding={1}
          textAlign={"center"}
          variant="h1"
        >
          Latest Web Development Courses For Everyone
        </Typography>
        <Button
          sx={{
            borderRadius: "3px",
            width: "200px",
            margin: "auto",
            mt: 2,
            bgcolor: "#1B1A17",
            color: "white",
            ":hover": { color: "#1B1A17" },
          }}
          color="inherit"
          variant="contained"
        >
          Start Studying
        </Button>
      </Box>

      <Cards />
    </div>
  );
};

export default MidPage;

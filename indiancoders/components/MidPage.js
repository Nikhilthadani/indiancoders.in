import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const MidPage = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <div>
      <Box
        margin={"auto"}
        marginTop={3}
        padding={2}
        maxWidth={1000}
        border={"1px solid black"}
        boxShadow={"5px 5px 10px #243b55"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #243b55",
          },
        }}
      >
        <Typography
          fontSize={{ lg: "30px", md: "26px", sm: "20px", xs: "18px" }}
          fontFamily={"monospace"}
          textTransform={"uppercase"}
          padding={5}
          fontWeight={"bold"}
          textAlign={"center"}
          variant="h2"
          sx={{
            transition: "transform 10",
            transform: "scaleY(1.5)",
            textShadow: "5px 5px 5px #243b55",
          }}
        >
          Welcome to Indian Coders
        </Typography>
      </Box>
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(112,4,79,1) 52%, rgba(218,8,8,1) 99%)",
          mt: 2,
        }}
      >
        <Typography
          fontSize={{ lg: "38px", md: "34px", sm: "28px", xs: "24px" }}
          padding={5}
          variant="h2"
          fontFamily={"monospace"}
        >
          Coding Courses For Everyone
        </Typography>
        <Box>
          <Grid height={400} container>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection={"column"}>
                <Typography
                  fontSize={{ lg: "24px", md: "22px", sm: "18px", xs: "16px" }}
                  fontFamily={"monospace"}
                  variant="h4"
                  padding={2}
                >
                  Indian Coders is the platform for Coding and Programming
                  Courses. Here we have tutorials on ReactJS, Mern Stack,
                  Material UI, NextJS, NodeJS, JavaScript and Much More.
                  <br /> <br />
                  Make sure to check our Youtube Page For These Tutorials.
                </Typography>
                <Typography
                  fontFamily={"monospace"}
                  variant="h5"
                  color={"pink"}
                  padding={2}
                >
                  Platform Created By <br /> Nikhil Thadani: Founder and CEO, At
                  Indian Coders
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={"/code.png"}
                alt="Indian Coders"
                style={{
                  display: "flex",
                  width: isMatch ? "100%" : "70%",
                  margin: "auto",
                  marginTop: isMatch ? "5px" : "auto",
                  marginBottom: "auto",
                  justifyContent: "center",
                  boxShadow: "10px 10px 20px #243b55",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default MidPage;

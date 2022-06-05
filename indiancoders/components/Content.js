import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { data } from "../data/utils";

const Content = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <div>
      <Box marginTop={5} display="flex">
        <Grid
          sx={{ placeItems: "center", marginLeft: "auto", marginRight: "auto" }}
          container
        >
          {data.map((vid, index) => (
            <Grid
              padding={5}
              margin="auto"
              item
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={3}
            >
              <iframe
                width={isMatch ? "200" : "320"}
                height="200"
                src={`https://www.youtube.com/embed/${vid.embedUrl}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={vid.name}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Content;

import { Grid } from "@mui/material";
import React from "react";
import Cardlayout from "./CardLayout";

const Cards = () => {
  return (
    <div>
      <Grid container>
        {[1, 2, 3, 4, 5].map((val) => (
          <Grid key={val} item xl={2} lg={4} md={4} sm={4} xs={6} padding={2}>
            <Cardlayout />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;

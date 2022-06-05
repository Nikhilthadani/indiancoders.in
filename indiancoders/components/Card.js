import { Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";

const Cardlayout = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>{props.children}</CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cardlayout;

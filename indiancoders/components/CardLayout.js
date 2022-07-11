import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cardlayout = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <Image
        width={"100%"}
        height="50%"
        layout="responsive"
        src={"https://i.ytimg.com/vi/TfNCK7Kjofc/maxresdefault.jpg"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          3 Ways To Fetch Data In React
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In this blog you will learn about 3 ways where you can fetch data in
          React
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={"/blog/3-ways-to-fetch-data-react/"}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cardlayout;

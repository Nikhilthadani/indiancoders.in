import { AppBar, Toolbar, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const links = ["Courses", "Join Us"];
const labelSx = { fontWeight: "bold", fontFamily: "sans-serif" };

const Header = () => {
  const [tabVal, setTabVal] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#1B1A17", height: "60px", boxShadow: "none" }}
    >
      <Toolbar>
        <Box>
          <Link href="/">
            <Image
              width={"80px"}
              height={"80px"}
              src={"/logo.png"}
              alt="Indian Coders"
            />
          </Link>
        </Box>
        <Box justifyContent={"center"} display="flex" marginLeft="auto">
          <Tabs textColor="white">
            {links.map((link) => (
              <Tab label={link} />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

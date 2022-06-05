import { AppBar, Toolbar, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const bg = {
  backgroundImage:
    "linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% )",
};
const labelSx = { fontWeight: "bold", fontFamily: "sans-serif" };

const Header = () => {
  const [tabVal, setTabVal] = useState();
  return (
    <AppBar position="sticky" sx={{ ...bg, height: "60px" }}>
      <Toolbar>
        <Box>
          <Link href="/">
            <img
              style={{ maxWidth: "80px", cursor: "pointer" }}
              src={"/logo.png"}
              alt="Indian Coders"
            />
          </Link>
        </Box>
        <Box justifyContent={"center"} display="flex" marginLeft="auto">
          <Tabs value={tabVal} textColor="inherit" indicatorColor="primary">
            <Link href={"/tutorials"} passHref>
              <Tab
                sx={labelSx}
                label="Tutorials"
                onClick={() => setTabVal(0)}
              />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCaKqU7lmR4wQ5Bj9F9E9i_Q"}
            >
              <Tab sx={labelSx} LinkComponent={Link} label="Youtube" />
            </Link>
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

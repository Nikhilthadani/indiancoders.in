import { Fragment } from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

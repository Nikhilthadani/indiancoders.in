import { Fragment } from "react";
import Content from "./Content";
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

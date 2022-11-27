import React from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import { Footer } from "./Footer";

export const Layout = (props) => {
  return (
    <div>
      <NavMenu />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Content from "../../components/content/Content";

function Main() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Content />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Main;

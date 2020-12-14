import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Code from "../../components/code/Code";

function CodePage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Code />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default CodePage;

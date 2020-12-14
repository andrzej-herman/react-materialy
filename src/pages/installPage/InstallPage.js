import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Install from "../../components/install/Install";

function CodePage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Install />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default CodePage;

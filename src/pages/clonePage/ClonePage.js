import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Clone from "../../components/clone/Clone";

function ClonePage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Clone />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ClonePage;
